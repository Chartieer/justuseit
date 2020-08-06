const { execSync } = require('child_process');
const chalk = require('chalk');
const shell = require('shelljs');
const path = require('path');
const glob = require('glob');
const copy = require('recursive-copy');

function copyReadme() {
  glob('packages/*/README.md', {}, function (er, files) {
    files.forEach((file) => {
      console.log('-->> ', file);
      const filePath = file.split('/README.md');

      // //console.log('-->> ' file + filePath[0], '/dist/', filePath[1]);
      // //console.log('file:', filePath[0], `/dist/${basePath}`);
      // //shell.cp('-R', `${file}`, filePath[0] + `/dist/${basePath}`);
      const _file = filePath[0] + '/dist/README.md';

      //console.log(_file);
      copy(file, _file, { overwrite: true }, function (error, results) {
        if (error) {
          console.log(chalk.red('Copy failed: ' + error));
        } else {
          console.log(chalk.green('Copied ' + results.length + ' files', file));
        }
      });
    });
  });
}
copyReadme();
