#! /usr/bin/env node

'use strict';

const commander = require('commander');
const omit = require('lodash');
const { exec } = require('child_process');
const packageJson = require('../package.json');
const fs = require('fs');

const appName = process.argv[2];
const TEMPLATE_DIR = 'https://github.com/Leopold-V/react-parcel-boilerplate.git';

const NAME = packageJson.name;

commander
  .name('react-parcel-boilerplate')
  .version(packageJson.version, '-v, --version')
  .option('-d, --dir <type>', `project's directory.`, NAME)
  .option('-n, --name <type>', `project's name.`, NAME)
  .parse(process.argv);

exec(`git clone ${TEMPLATE_DIR} ${process.cwd()}/${appName}`, 
    (initErr, initStdout, initStderr) => {
        if (initErr) {
            console.error(`A problem happened during installation : ${initErr}`);
        return;
        }
        console.log('Installing dependencies -- it might take a few minutes...');
        exec(`cd ${appName} && npm install -f ${process.cwd()}/${appName}`, (initErr, initStdout, initStderr) => {
            if (initErr) {
                console.error(`A problem happened during installation : ${initErr}`);
                return;
            }

            fs.rmdirSync(`${process.cwd()}/${appName}/bin`, { recursive: true });
        
            const newPackage = omit(packageJson, [
            'author',
            ]);
            
            Object.assign(newPackage, {
            version: '1.0.0',
            description: '',
            });
            
            fs.writeFileSync(
            `${process.cwd()}/${appName}/package.json`,
            JSON.stringify(newPackage, null, 2),
            'utf8',
            );
            console.info('The installation is done :)');
            console.log(`cd ${appName}`);
            console.log('npm start');
        });
    }
);