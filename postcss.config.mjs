import fs from "node:fs";
import path from "node:path";
import oxide from "@tailwindcss/oxide";

// On Windows when running under WebAssembly / WASI due to WDAC policy,
// Rust's WASI filesystem walker cannot traverse host paths and returns 0 candidates.
// We patch Scanner.prototype.scan to walk source files in JS and pass them to scanFiles().
// On Linux / Vercel, process.platform is 'linux', so native bindings run standardly without patch.
if (process.platform === "win32" && oxide && oxide.Scanner) {
  const origScan = oxide.Scanner.prototype.scan;
  let cachedFiles = [];

  oxide.Scanner.prototype.scan = function () {
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

    const files = glob("src");
    cachedFiles = files.map((f) => path.resolve(f));

    const fileInputs = files.map((f) => ({
      content: fs.readFileSync(f, "utf8"),
      extension: path.extname(f).slice(1),
    }));

    return this.scanFiles(fileInputs);
  };

  Object.defineProperty(oxide.Scanner.prototype, "files", {
    get() {
      return cachedFiles;
    },
    configurable: true,
  });
}

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
