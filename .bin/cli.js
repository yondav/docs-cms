#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/yondav/parcel-starter-tw.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;
const removeGit = `cd ${repoName} && rm -rf .git`;

console.log(`Cloning repository named ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit();

console.log(`Installing dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit();

const removedGit = runCommand(removeGit);

if (!removedGit) process.exit();

console.log('Starter installed!');
console.log(`cd ${repoName} && yarn start`);
