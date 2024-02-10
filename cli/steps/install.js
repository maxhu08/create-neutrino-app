const { exec } = require("child_process");
const chalk = require("chalk");
const pmText = require("../utils/pmText");

const installDependecies = async ({
  name,
  destinationFolderPath,
  packageManager
}) => {
  const loadingIconStates = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let loadingIconIndex = 0;

  const loadingIconInterval = setInterval(() => {
    process.stdout.write(
      `\r${chalk.magenta(
        loadingIconStates[loadingIconIndex]
      )} installing dependecies with ${pmText(packageManager)}`
    );
    loadingIconIndex = (loadingIconIndex + 1) % loadingIconStates.length;
  }, 100);

  if (packageManager === "pnpm") {
    exec(
      `cd ${destinationFolderPath} && pnpm i`,
      { encoding: "utf-8" },
      (err) => {
        if (err) {
          console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
          process.exit(1);
        }

        installCompletionMessage({ name, loadingIconInterval, packageManager });
      }
    );
  } else if (packageManager === "yarn") {
    exec(
      `cd ${destinationFolderPath} && yarn i`,
      { encoding: "utf-8" },
      (err) => {
        if (err) {
          console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
          process.exit(1);
        }

        installCompletionMessage({ name, loadingIconInterval, packageManager });
      }
    );
  } else if (packageManager === "npm") {
    exec(
      `cd ${destinationFolderPath} && npm i`,
      { encoding: "utf-8" },
      (err) => {
        if (err) {
          console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
          process.exit(1);
        }

        installCompletionMessage({ name, loadingIconInterval, packageManager });
      }
    );
  }
};

const installCompletionMessage = ({
  name,
  loadingIconInterval,
  packageManager
}) => {
  clearInterval(loadingIconInterval);
  console.log(
    `\r\x1b[K${chalk.green("✔")} installed dependecies with ${pmText(
      packageManager
    )}`
  );
  console.log(`\nnow just cd into \`${chalk.cyan(name)}\``);
};

module.exports = installDependecies;
