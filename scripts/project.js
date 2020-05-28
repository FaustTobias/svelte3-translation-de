const fs = require("fs");

const actions = {
  update: require("./actions/update"),
  start: require("./actions/start"),
};

async function main(args) {
  if (!args[0]) {
    console.error("Keine Aktion angegeben.");

    printAvailableActions();
    process.exitCode = 1;

    return;
  }

  const action = actions[args[0]];
  if (!action) {
    console.error("Aktion nicht gefunden:", args[0]);

    printAvailableActions();
    process.exitCode = 1;

    return;
  }

  action.invoke(args.slice(1));
}

function printAvailableActions() {
  console.log();
  console.log("Verfügbare Aktionen:");

  for (const name in actions) {
    console.log(`    ${name.padEnd(16)}${actions[name].description}`);
  }
}

main(process.argv.slice(2)).catch((e) => console.error("Uncaught error:", e));
