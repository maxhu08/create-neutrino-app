#!/usr/bin/env node

const { program } = require("commander");
const { execSync } = require("child_process");
const chalk = require("chalk");

program
  .description(
    `tool to quickly generate a minimalistic template with module bundling, hmr, typescript, tailwind & sass configured`
  )
  .action(() => {
    const name = "my-app";
    const command = `npx degit https://github.com/maxhu08/neutrino-template/templates/default ${name}`;
    try {
      const output = execSync(command, { encoding: "utf-8" });
      console.log(output);
    } catch (err) {
      console.error(`${chalk.red("✘")} err cloning template ${err}`);
    }
  });

program.parse(process.argv);
