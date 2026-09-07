// Only apply on Windows where WDAC blocks native .node binaries
if (process.platform !== 'win32') {
  process.exit(0);
}

try {
  const fs = require('fs');
  const path = require('path');

  const patchCode = `
if (nativeBinding && nativeBinding.Scanner) {
  const origScan = nativeBinding.Scanner.prototype.scan;
  const fs = require('fs');
  const path = require('path');
  let cachedFiles = [];

  nativeBinding.Scanner.prototype.scan = function () {
    try {
      const nativeResults = origScan.call(this);
      if (nativeResults && nativeResults.length > 0) return nativeResults;
    } catch (_) {}

    const extensions = [".tsx", ".ts", ".jsx", ".js", ".html", ".css", ".md"];
    const glob = (dir) => {
      let results = [];
      if (!fs.existsSync(dir)) return results;
      try {
        const list = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of list) {
          if (["node_modules", ".next", ".git", ".vscode"].includes(item.name)) continue;
          const full = path.join(dir, item.name);
          if (item.isDirectory()) {
            results = results.concat(glob(full));
          } else if (extensions.includes(path.extname(item.name))) {
            results.push(full);
          }
        }
      } catch (_) {}
      return results;
    };

    const files = glob(path.join(process.cwd(), "src"));
    cachedFiles = files.map((f) => path.resolve(f));

    const fileInputs = files.map((f) => ({
      content: fs.readFileSync(f, "utf8"),
      extension: path.extname(f).slice(1),
    }));

    return this.scanFiles(fileInputs);
  };

  Object.defineProperty(nativeBinding.Scanner.prototype, "files", {
    get() {
      return cachedFiles;
    },
    configurable: true,
  });
}
`;

  const oxidePath = path.join(__dirname, '..', 'node_modules', '@tailwindcss', 'oxide', 'index.js');
  if (fs.existsSync(oxidePath)) {
    let content = fs.readFileSync(oxidePath, 'utf8');
    if (!content.includes('cachedFiles = files.map')) {
      content = content.replace(
        'module.exports = nativeBinding',
        patchCode + '\nmodule.exports = nativeBinding'
      );
      fs.writeFileSync(oxidePath, content, 'utf8');
      console.log('Successfully applied Tailwind oxide patch.');
    }
  }
} catch (e) {
  // Gracefully continue without breaking install
}
