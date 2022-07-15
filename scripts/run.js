#! /usr/bin/env node

const { execSync } = require('child_process')
const os = require('os')

function pacakgerManager() {
  let packageManager = 'npm'
  try {
    execSync('which pnpm')
    packageManager = 'pnpm'
  }
  catch (e) {
    try {
      console.info('Installing Pnpm...')
      execSync('npm install -g pnpm')
      packageManager = 'pnpm'
    }
    catch (error) {
      console.info('Pnpm installed failed.')
    }
  }
  return packageManager
}

if (os.platform() === 'darwin') {
  const manager = pacakgerManager()
  execSync(`${manager} run preRebuild`, {
    stdio: 'inherit',
  })
}
