const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const { spawn } = require('child_process')
const CodotypeRuntime = require('@codotype/runtime')

async function serve (options) {

  // Logs start message
  console.log(`\nStarting ${chalk.blue(`codotype build`)}...`)

  // // // //
  // CLEANUP - wrap this in a try/catch
  // CLEANUP - this type of checking will be necessary in a number of places
  // This logic should be abstracted & generalized as much as possible
  // Pulls in requisite paths for codotype runtime
  const generatorMetaPath = path.resolve(process.cwd(), './codotype-generator.json') // CLEANUP - constantize MAGIC STRING

  // Invoke runtime directly with parameters
  const runtime = new CodotypeRuntime()

  // Registers this generator via relative path
  try {
    runtime.registerGenerator({ absolute_path: process.cwd() })
  } catch (err) {
    throw err
    return
  }

  //
  // // // //

  // // // //
  // CLEANUP - running a user interface service will necessary in an number of places
  // This process should be abstracted as much as possible

  // Generates path from here to node_modules/@codotype/cli-ui
  const uiPath = path.resolve(__dirname, '../node_modules/@codotype/cli-ui')

  // Assembles arguments to start the UI server
  let args = ['--cwd', uiPath, 'run', 'build', '--generator_path', process.cwd()]
  const uiProc = spawn('yarn', args);

  // Logging
  uiProc.stdout.on('data', (data) => console.log(data.toString()))

  // Closes after build is complete
  uiProc.on('close', (code) => {
    console.log(`\nFinished ${chalk.blue(`codotype build`)}...`)
    process.exit(1)
  });

  //
  // // // //

}

module.exports = (...args) => {
  return serve(...args).catch(err => {
    console.log(chalk.red('codotype cli error'))
    console.log(chalk.yellow('generator not found in local directory'))
    console.log(err)
    if (!process.env.CODOTYPE_CLI_TEST) {
      process.exit(1)
    }
  })
}