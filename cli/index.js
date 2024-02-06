#!/usr/bin/env node

const path = require("path");
const { program } = require("commander");
const { exec } = require("child_process");
const chalk = require("chalk");
const prompt = require("prompt-sync")();

const currentDirectory = process.cwd();

program
  .arguments("[name]")
  .description(
    `tool to quickly generate a minimalistic template with module bundling, hmr, typescript, tailwind & sass configured`
  )
  .action((name) => {
    if (!name) {
      name = prompt(`${chalk.blue("?")} enter the app name: `);
    }
    const destinationFolderPath = path.join(currentDirectory, name);

    const command = `npx degit https://github.com/maxhu08/create-neutrino-app/templates/default ${destinationFolderPath}`;

    exec(`${command} > /dev/null 2>&1`, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error(`${chalk.red("✘")} err cloning template: ${err}`);
        process.exit(1);
      }

      console.log(`🌌 template cloned into ${destinationFolderPath}`);
    });
  });

program.parse(process.argv);
