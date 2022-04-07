/* eslint-disable import/no-extraneous-dependencies */

const shelljs = require('shelljs')

const VERSION = process.env.npm_package_version

function run(command) {
  shelljs.echo(`Running: \`${command}\`…`)
  const output = shelljs.exec(command)

  if (output.code !== 0) {
    shelljs.exit(1)
  }
}

;(() => {
  try {
    run(`git checkout -B ci-release-v${VERSION}`)
    run(`yarn`)
    run(`npm version ${VERSION} --workspaces`)
    run(`git add .`)
    run(`git commit --amend -m "ci(release): ${VERSION} [skip ci]"`)
    run(`git tag -f v${VERSION}`)
    run(`git push origin HEAD --tags`)
    run(`git checkout main`)
    run(`git reset --hard origin/main`)
  } catch (err) {
    shelljs.echo(`[scripts/finalizeVersionBump.js] Error: ${err.message}`)

    shelljs.exit(1)
  }
})()
