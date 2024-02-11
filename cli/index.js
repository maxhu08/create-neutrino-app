#!/usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");
const prompt = require("prompt-sync")();
const inquirer = require("inquirer");

// steps
const cloneTemplate = require("./steps/clone");
const installDependecies = require("./steps/install");

const _packageManager = process.env.npm_config_user_agent;
let packageManager = "npm";

if (_packageManager.startsWith("pnpm")) packageManager = "pnpm";
else if (_packageManager.startsWith("yarn")) packageManager = "yarn";

program
  .arguments("[name]")
  .description(
    `tool to quickly generate a minimalistic template with module bundling, hmr, typescript, tailwind & sass configured`
  )
  .action(async (name) => {
    if (!name) {
      name = prompt(`${chalk.blue("?")} enter the app name: `);
    }

    let templateType = await inquirer.prompt([
      {
        type: "list",
        name: "selection",
        message: "what template to you want to use",
        choices: ["typescript-tailwind-sass", "typescript"]
      }
    ]);

    // clone template
    cloneTemplate({ name, templateType }, ({ destinationFolderPath }) => {
      // install dependecies based on package manager
      installDependecies({ name, destinationFolderPath, packageManager });
    });
  });

program.parse(process.argv);
