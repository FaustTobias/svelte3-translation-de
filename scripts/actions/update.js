const fs = require("fs");
const cp = require("child_process");
const getProject = require("../common/getProject");
const task = require("../common/task");

exports.description = "Updated ein Projekt.";

exports.invoke = async function (args) {
  const repo = getProject(args[0]);

  let repoRootDir = `${__dirname}/../../.projects/${args[0]}`;
  let repoDir = repoRootDir;
  if (repo.subdir) {
    repoDir = `${repoRootDir}/${repo.subdir}`;
  }

  if (await task(args, "clone", fs.existsSync(repoRootDir))) {
    fs.rmdirSync(repoRootDir, { recursive: true });

    cp.execSync(
      `git clone --depth 1 --single-branch --progress https://github.com/${repo.github}.git .projects/${args[0]}`,
      {
        cwd: `${__dirname}/../..`,
        stdio: "inherit",
      }
    );
  }

  for (const name in repo.update) {
    let step = repo.update[name];
    let shouldSkip = false;

    if (typeof step === "object" && typeof step.shell === "string" && typeof step.skip === "function") {
      shouldSkip = await step.skip();
    }

    if (typeof step === "object" && typeof step.shell === "string") {
      step = step.shell;
    }

    if (await task(args, name, shouldSkip)) {
      if (typeof step == "string") {
        console.log("Führe aus:", step);
        console.log();

        cp.execSync(
          step,
          {
            cwd: repoDir,
            stdio: "inherit",
          }
        );

        continue;
      }

      console.error("Fehler: Nicht unterstützt. Updateschritte können aktuell nur shell Befehle ausführen.");

    }
  }
};
