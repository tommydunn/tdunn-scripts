const {ifAnyDep} = require('../utils')

module.exports = {
  extends: [
    require.resolve('eslint-config-tommydunn'),
    require.resolve('eslint-config-tommydunn/jest'),
    ifAnyDep('react', require.resolve('eslint-config-tommydunn/jsx-a11y')),
    ifAnyDep('react', require.resolve('eslint-config-tommydunn/react')),
  ].filter(Boolean),
  rules: {},
}
