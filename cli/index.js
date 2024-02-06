#!/usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");
const prompt = require("prompt-sync")();

// steps
const cloneTemplate = require("./steps/clone");
const installDependecies = require("./steps/install");

const packageManager = process.env.npm_config_user_agent;

program
  .arguments("[name]")
  .description(
    `tool to quickly generate a minimalistic template with module bundling, hmr, typescript, tailwind & sass configured`
  )
  .action(async (name) => {
    if (!name) {
      name = prompt(`${chalk.blue("?")} enter the app name: `);
    }

    // clone template
    await cloneTemplate({ name }, ({ destinationFolderPath }) => {
      console.log(destinationFolderPath);

      // install dependecies based on package manager
      // await installDependecies({ destinationFolderPath, packageManager });
    });
  });

program.parse(process.argv);
