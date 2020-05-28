const fs = require("fs");
const cp = require("child_process");
const translate = require("../common/translate");
const getProject = require("../common/getProject");

exports.description = "Startet einen Dev-Server für ein Projekt.";

exports.invoke = async function (args) {
  const repo = getProject(args[0]);

  let repoDir = `${__dirname}/../../.projects/${args[0]}`;
  if (repo.subdir) {
    repoDir = `${repoDir}/${repo.subdir}`;
  }

  server = cp.exec(repo.start, {
    cwd: repoDir
  });

  server.stdout.pipe(process.stdout);
  server.stderr.pipe(process.stderr);

  translate(
    `${__dirname}/../../projects/${args[0]}`,
    repoDir,
    `.original/${args[0]}`
  );
};

let server;
