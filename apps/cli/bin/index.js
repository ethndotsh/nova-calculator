#! /usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const mexp = require("math-expression-evaluator");
const chalk = require("chalk");

yargs(hideBin(process.argv))
  .command(
    ["$0 [expression]", "eval", "evaluate", "calculate", "calc", "solve"],
    "evaluate math expression",
    (yargs) => {
      return yargs.positional("expression", {
        describe: "expression to evaluate",
        type: "string",
      });
    },
    (argv) => {
      if (!argv.expression) {
        return console.log(
          chalk.red("No expression provided. Run ncalc --help for more info.")
        );
      }

      try {
        const res = mexp.eval(argv.expression);

        console.log(res);
      } catch (error) {
        console.log(
          chalk.red(
            "Error understanding expression. Please follow the rules at https://novacalc.cursecode.me/guide"
          )
        );
      }
    }
  )
  .parse();
