const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'assets', 'reviews');
const outDir = path.join(dir, 'avatars');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const mapping = {
  'Screenshot 2026-09-06 112038.png': 'jamshed-ul.png',
  'Screenshot 2026-09-06 112044.png': 'jefranul-rakib.png',
  'Screenshot 2026-09-06 112047.png': 'vf-qatar.png',
  'Screenshot 2026-09-06 112054.png': 'md-mehedi.png',
  'Screenshot 2026-09-06 112100.png': 'rakibul-basher.png',
  'Screenshot 2026-09-06 112104.png': 'mayeen-uddin.png',
  'Screenshot 2026-09-06 112108.png': 'montahin-hossein.png',
  'Screenshot 2026-09-06 112111.png': 'dil-afroz.png',
  'Screenshot 2026-09-06 112115.png': 'al-mamun.png',
  'Screenshot 2026-09-06 112132.png': 'raihan-alam.png',
  'Screenshot 2026-09-06 112135.png': 'sm-jahiduzzaman.png',
  'Screenshot 2026-09-06 112138.png': 'riyad-uddin.png',
  'Screenshot 2026-09-06 112143.png': 'tamim-rubaiyet.png',
  'Screenshot 2026-09-06 112147.png': 'syed-mohammad.png',
  'Screenshot 2026-09-06 112150.png': 'mizan-chy.png',
  'Screenshot 2026-09-06 112153.png': 'md-shohag.png',
  'Screenshot 2026-09-06 112204.png': 'rakibur-rahaman.png',
  'Screenshot 2026-09-06 112210.png': 'asraf-khan.png',
  'Screenshot 2026-09-06 112215.png': 'mrh.png',
  'Screenshot 2026-09-06 112223.png': 'tarek-aziz.png',
  'Screenshot 2026-09-06 112228.png': 'md-sajjad.png',
  'Screenshot 2026-09-06 112232.png': 'md-sajjad-2.png',
};

async function findCircle(filePath) {
  const { data, info } = await sharp(filePath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let bestScore = -1e9;
  let bestCircle = null;

  for (let R = 17; R <= 21; R++) {
    for (let cy = R + 4; cy < Math.min(80, height - R); cy++) {
      for (let cx = R + 4; cx < Math.min(80, width - R); cx++) {
        let insideNonWhite = 0, outsideWhite = 0, outsideTotal = 0, insideTotal = 0;
        for (let dy = -R - 3; dy <= R + 3; dy++) {
          for (let dx = -R - 3; dx <= R + 3; dx++) {
            const d = Math.sqrt(dx*dx + dy*dy);
            const px = cx + dx;
            const py = cy + dy;
            if (px < 0 || px >= width || py < 0 || py >= height) continue;
            const idx = (py * width + px) * channels;
            const isWhite = data[idx] > 240 && data[idx+1] > 240 && data[idx+2] > 240;
            if (d <= R - 2) {
              insideTotal++;
              if (!isWhite) insideNonWhite++;
            } else if (d > R + 0.5 && d <= R + 3.5) {
              outsideTotal++;
              if (isWhite) outsideWhite++;
            }
          }
        }
        const score = (insideNonWhite / insideTotal) * 2 + (outsideWhite / outsideTotal);
        if (insideNonWhite / insideTotal > 0.4 && outsideWhite / outsideTotal > 0.6) {
          if (score > bestScore) {
            bestScore = score;
            bestCircle = { cx, cy, R };
          }
        }
      }
    }
  }
  return bestCircle;
}

async function extractAll() {
  for (const [screenshotFile, cleanName] of Object.entries(mapping)) {
    const filePath = path.join(dir, screenshotFile);
    if (!fs.existsSync(filePath)) {
      console.warn('File not found:', filePath);
      continue;
    }
    const circle = await findCircle(filePath);
    if (!circle) {
      console.error('No circle found for:', screenshotFile);
      continue;
    }
    const { cx, cy, R } = circle;
    const cropSize = R * 2;
    const left = Math.max(0, cx - R);
    const top = Math.max(0, cy - R);

    // Create a circular SVG mask for clean anti-aliased circle
    const circleSvg = Buffer.from(
      '<svg width="120" height="120"><circle cx="60" cy="60" r="59" fill="white" /></svg>'
    );

    const outPath = path.join(outDir, cleanName);
    await sharp(filePath)
      .extract({ left, top, width: cropSize, height: cropSize })
      .resize(120, 120, { kernel: sharp.kernel.lanczos3 })
      .composite([{ input: circleSvg, blend: 'dest-in' }])
      .png()
      .toFile(outPath);

    console.log('Successfully saved avatar:', cleanName);
  }
}

extractAll();
