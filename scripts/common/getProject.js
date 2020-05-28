const repos = require("../../config/projects");
const printAvailableProjects = require("./printAvailableProjects");

module.exports = function getProject(name) {
    if (!name) {
        console.error("Bitte gib ein Repository an.");

        printAvailableProjects();
        process.exit(1);
    }

    const repo = repos[name];
    if (!repo) {
        console.error("Bitte gib ein Repository an.");

        printAvailableProjects();
        process.exit(1);
    }

    return repo;
}
