const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, './'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
}
