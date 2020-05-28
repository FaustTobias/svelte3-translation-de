const repos = require("../../config/projects");

module.exports = function printAvailableProjects() {
    console.log();
    console.log("Verfügbare Projekte:");
    for (const name in repos) {
        console.log(`    ${name.padEnd(16)}-> ${repos[name].github}`);
    }
}
