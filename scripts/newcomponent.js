#! /usr/bin/env node
const app = require('commander');
const { execSync, exec } = require('child_process');
const shell = require('shelljs');
const path = require('path');
const chalk = require('chalk');

app
  .version('0.0.2')
  .option('-n, -name <name>', 'Name of new Component')
  .action((options) => {
    const _name = options.Name.toLowerCase();

    if (!_name) {
      console.log(
        chalk.black.bgRed.bold('                                          '),
      );
      console.log(
        chalk.black.bgRed.bold('    Yo! Component missing -n/-name Bro    '),
      );
      console.log(
        chalk.black.bgRed.bold('                                          '),
      );

      return false;
    }

    if (_name) {
      shell.mkdir('-p', `packages/${_name}`);

      //shell.cd(`packages/${_name}`);

      execSync(`yarn generate ${_name}`, {
        stdio: 'inherit',
      });

      execSync(`yarn workspace @hi5/${_name} add -P react`, {
        stdio: 'inherit',
      });

      console.log(chalk.black.bgGreen.bold('                               '));
      console.log(chalk.black.bgGreen.bold('    Yo! Component Ready Bro    '));
      console.log(chalk.black.bgGreen.bold('                               '));
    } else {
      console.log('please suplly Component name with -name or -n flag');
    }
  });

app.parse(process.argv);
