const { execSync } = require('child_process');
const chalk = require('chalk');
const shell = require('shelljs');
const path = require('path');
const glob = require('glob');
const copy = require('recursive-copy');

// function copyScssStyles() {
//   console.log('COPY STYLES', __dirname);

//   glob('packages/**/**/*.scss', {}, function(er, files) {
//     files.forEach((file) => {
//       const splitPath = file.split('/');
//       const basePath = splitPath.slice(3, splitPath.length).join('/');
//       const filePath = file.split('/src/');
//       console.log('-->> ' + filePath[0] + '/dist/' + basePath);
//       console.log('file:', file, basePath);
//       shell.cp('-R', `${file}`, filePath[0] + `/dist/${basePath}`);
//     });
//   });
// }

// copyScssStyles();

function copySCSS() {
  glob('packages/**/src/**/**/*.scss', {}, function(er, files) {
    files.forEach((file) => {
      //const splitPath = file.split('/');
      //const basePath = splitPath.slice(3, splitPath.length).join('/');
      const filePath = file.split('/src/');
      //console.log('-->> ' + filePath[0], '/dist/', filePath[1]);
      //console.log('file:', filePath[0], `/dist/${basePath}`);
      //shell.cp('-R', `${file}`, filePath[0] + `/dist/${basePath}`);
      const _file = filePath[0] + '/dist/' + filePath[1];

      //console.log(_file);
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
