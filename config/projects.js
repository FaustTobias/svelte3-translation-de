// In diese Datei sind alle zu übersetzenden Repositories konfiguriert.

module.exports = {
    "svelte.dev": {
        github: "sveltejs/svelte",
        subdir: "site",
        update: {
            install: {
                shell: "npm i",
                skip() {
                    // Einfach prüfen ob das node_modules Verzeichnis existiert.
                    return require("fs").existsSync(`${__dirname}/../.projects/svelte.dev/site/node_modules`)
                }
            },
            postinstall: {
                shell: "npm run update",
                skip() {
                    // Einfach prüfen ob das community Verzeichnis existiert.
                    // Wird erst nach 'yarn update' erstellt
                    return require("fs").existsSync(`${__dirname}/../.projects/svelte.dev/site/scripts/community`)
                }
            }
        },
        start: "npm run dev",
    },
};
