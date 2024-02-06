const { exec } = require("child_process");
const chalk = require("chalk");
const pmText = require("../utils/pmText");

const installDependecies = async ({
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

        installCompletionMessage({ loadingIconInterval, packageManager });
      }
    );
  } else if (packageManager === "yarn") {
    exec(`yarn i`, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
        process.exit(1);
      }

      installCompletionMessage({ loadingIconInterval, packageManager });
    });
  } else if (packageManager === "npm") {
    exec(`npm i`, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error(`${chalk.red("✘")} err installing dependecies: ${err}`);
        process.exit(1);
      }

      installCompletionMessage({ loadingIconInterval, packageManager });
    });
  }
};

const installCompletionMessage = ({ loadingIconInterval, packageManager }) => {
  clearInterval(loadingIconInterval);
  console.log(
    `\r\x1b[K${chalk.green("✔")} installed dependecies with ${pmText(
      packageManager
    )}`
  );
};

module.exports = installDependecies;
