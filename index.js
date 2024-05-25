const eslint_config = require('./configs/eslint.js')
const lodash_config = require('./configs/lodash.js')
const perfectionist_config = require('./configs/perfectionist.js')
const react_configs = require('./configs/react.js')
const typescript_config = require('./configs/typescript.js')
const unicorn_config = require('./configs/unicorn.js')

module.exports = [
  eslint_config,
  typescript_config,
  ...react_configs,

  perfectionist_config,
  unicorn_config,
  lodash_config,
]
