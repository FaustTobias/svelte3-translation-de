const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const glob = require("glob");
const YAML = require("yaml");
const lodash = require("lodash");

let srcWatcher, destWatcher;

/**
 * Startet einen Übersetzungs-Watcher.
 */
module.exports = function translate(srcDir, destDir, tmpDir) {
  srcWatcher = chokidar.watch("**/*", {
    cwd: srcDir,
  });

  destWatcher = chokidar.watch([], {
    cwd: destDir,
  });

  srcWatcher.on("all", (ev, p) => {
    if (ev === "add" || ev === "change") {
      if (!translateConfigQueued) {
        translateConfigQueued = true;
        setTimeout(() => translateConfig(srcDir, destDir, tmpDir), 1000);
      }

      if (p !== "translations.yml") {
        if (!fs.existsSync(`${tmpDir}/${p}`)) {
          console.log("Copy original file", p);
          fs.mkdirSync(`${tmpDir}/${path.dirname(p)}`, { recursive: true });
          fs.copyFileSync(`${destDir}/${p}`, `${tmpDir}/${p}`);
        }

        fs.copyFileSync(`${srcDir}/${p}`, `${destDir}/${p}`);
      }
    }
  });
};

let translateConfigQueued = false;
let translateConfigPrevWatched = [];
function translateConfig(srcDir, destDir, tmpDir) {
  translateConfigQueued = false;

  console.log("Translating using config...");

  const config = YAML.parse(
    fs.readFileSync(`${srcDir}/translations.yml`).toString()
  );

  let files = [];
  for (const entry of config.translations) {
    files = lodash.union(files, entry.files);
  }

  destWatcher.unwatch(translateConfigPrevWatched);
  destWatcher.add(files);
  translateConfigPrevWatched = files;

  for (const file of files) {
    if (!fs.existsSync(`${tmpDir}/${file}`)) {
      fs.mkdirSync(`${tmpDir}/${path.dirname(file)}`, { recursive: true });
      console.log("Copy original file", file);
      fs.copyFileSync(`${destDir}/${file}`, `${tmpDir}/${file}`);
    }
  }

  for (const file of files) {
    let content = fs.readFileSync(`${tmpDir}/${file}`).toString();

    for (const entry of config.translations) {
      if (!entry.files.includes(file)) {
        continue;
      }

      for (const key in entry.translations) {
        content = content.replace(
          new RegExp(escapeRegExp(key), "g"),
          entry.translations[key]
        );
      }
    }

    fs.writeFileSync(`${destDir}/${file}`, content);
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
