const { execSync } = require('child_process');
const chalk = require('chalk');
const shell = require('shelljs');
const path = require('path');
const glob = require('glob');
const copy = require('recursive-copy');

function copySCSS() {
  console.log('copy SCSS');
  glob('./src/**/**/*.scss', {}, function(er, files) {
    console.log(files);
    files.forEach((file) => {
      const filePath = file.split('/src/');

      const _file = filePath[0] + '/dist/' + filePath[1];

      copy(file, _file, { overwrite: true }, function(error, results) {
        if (error) {
          console.log(chalk.red('Copy failed: ' + error));
        } else {
          console.log(chalk.green('Copied ' + results.length + ' files', file));
        }
      });
    });
  });
}
copySCSS();
