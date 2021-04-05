#! /usr/bin/env node

'use strict';

const commander = require('commander');
const { exec } = require('child_process');
const packageJson = require('../package.json');
const fs = require('fs');
const prompts = require('prompts');

const TEMPLATE = 'https://github.com/Leopold-V/react-parcel-boilerplate.git';
const NAME = packageJson.name;
let appName = process.argv[2];

commander
  .name('react-parcel-boilerplate')
  .version(packageJson.version, '-v, --version')
  .option('-d, --dir <type>', `project's directory.`, NAME)
  .option('-n, --name <type>', `project's name.`, NAME)
  .parse(process.argv);

const checkName = async (appName) => {
  if (!appName) {
    appName = (
      await prompts({
        type: 'text',
        message: 'Enter a name for your project :',
        name: 'appName',
        initial: '',
        validate: (value) =>
          !value ? 'Enter a valid name for your project' : true,
      })
    ).appName;
  }
  if (appName) {
    appName = appName.toLowerCase().replace(/ |_/g, '-');
  }
  return appName;
};

checkName(appName).then((appName) => {
  if (!appName) {
    console.log(
      '\x1b[31m',
      `You exited the react-parcel app creation, bye !`,
      '\x1b[0m'
    );
    return;
  }
  main(appName);
});

function main(appName) {
  fs.access(`${process.cwd()}/${appName}`, fs.constants.F_OK, (err) => {
    if (!err) {
      console.log(
        '\x1b[31m',
        `The file ${appName} already exist in the current directory, please give it another name.`,
        '\x1b[0m'
      );
      return;
    }
    exec(
      `git clone ${TEMPLATE} ${process.cwd()}/${appName}`,
      (initErr, initStdout, initStderr) => {
        if (initErr) {
          console.error(
            '\x1b[31m',
            `A problem happened during installation : ${initErr}`,
            '\x1b[0m'
          );
          return;
        }
        console.log(
          '\x1b[34m',
          'Installing dependencies... (it might take one minute)',
          '\x1b[0m'
        );
        exec(
          `cd ${appName} && npm install -f ${process.cwd()}/${appName}`,
          (initErr, initStdout, initStderr) => {
            if (initErr) {
              console.error(
                '\x1b[31m',
                `A problem happened during dependencies installation : ${initErr}`,
                '\x1b[0m'
              );
              return;
            }
            console.log(
              '\x1b[33m',
              'Preparing the project folder structure...',
              '\x1b[0m'
            );
            fs.rmdirSync(`${process.cwd()}/${appName}/bin`, {
              recursive: true,
            });
            fs.rmdirSync(`${process.cwd()}/${appName}/package.json`, {
              recursive: true,
            });

            const {
              bin,
              keywords,
              homepage,
              repository,
              bugs,
              ...newPackage
            } = packageJson;

            Object.assign(newPackage, {
              name: appName,
              version: '1.0.0',
              description: '',
              author: '',
              main: 'index.js',
              scripts: {
                start:
                  'npm run clean && parcel serve public/index.html --dist-dir development -p 3000',
                build:
                  'rimraf ./build && parcel build public/*.html --dist-dir build --public-url ./',
                test: 'jest',
                clean: 'rimraf ./development && rimraf ./.parcel-cache',
                prettify: 'npx prettier --write ./src/',
              },
              devDependencies: {
                '@parcel/transformer-sass': '^2.0.0-beta.2',
                '@testing-library/dom': '^7.30.3',
                '@testing-library/jest-dom': '^5.11.10',
                '@testing-library/react': '^11.2.6',
                autoprefixer: '^10.2.5',
                'babel-preset-react-app': '^10.0.0',
                jest: '^26.6.3',
                'jest-cli': '^26.6.3',
                parcel: '^2.0.0-beta.2',
                prettier: '2.2.1',
              },
              dependencies: {
                babel: '^6.23.0',
                'jest-styled-components': '^7.0.3',
                'normalize.css': '^8.0.1',
                'prop-types': '^15.7.2',
                react: '^17.0.2',
                'react-dom': '^17.0.2',
                'react-router-dom': '^5.2.0',
                rimraf: '^3.0.2',
                'styled-components': '^5.2.3',
              },
              postcss: {
                plugins: {
                  autoprefixer: {
                    overrideBrowserslist: [
                      '> 1%',
                      'last 4 versions',
                      'ie >= 9',
                    ],
                  },
                },
              },
            });

            fs.writeFile(
              `${process.cwd()}/${appName}/package.json`,
              JSON.stringify(newPackage, null, 2),
              'utf8',
              (err) => {
                if (err) {
                  console.error(
                    '\x1b[31m',
                    `A problem happened during installation : ${err}`,
                    '\x1b[0m'
                  );
                }
                console.info(
                  '\x1b[32m',
                  'The installation is done, this is ready to use !',
                  '\x1b[0m'
                );
              }
            );
          }
        );
      }
    );
  });
}
