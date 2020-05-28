module.exports = async function task(args, name, skipByDefault = false) {
    const skipFlag = `--no-${name}`;
    const forceFlag = `--${name}`;

    let perform;

    console.log();
    console.log();
    console.log("=".repeat(100));
    console.log(`Task: ${name}`);
    console.log();

    if (skipByDefault) {
        if (args.includes(forceFlag)) {
            console.log(`Wird ausgeführt... (${forceFlag} gesetzt)`);
            perform = true;
        } else {
            console.log(`Wird übersprungen... (kann mit ${forceFlag} erzwungen werden)`);
            perform = false;
        }
    } else {
        if (args.includes(skipFlag)) {
            console.log(`Wird übersprungen... (${skipFlag} gesetzt)`);
            perform = false;
        } else {
            console.log(`Wird ausgeführt... (kann mit ${skipFlag} übersprungen werden)`);
            perform = true;
        }
    }

    console.log("=".repeat(100));
    console.log();

    await new Promise(resolve => setTimeout(resolve, 2000));

    return perform;
}
