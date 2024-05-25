const lodash = require('eslint-plugin-lodash')

module.exports = {
  files: ['**/*.{js,ts,tsx}'],
  plugins: { lodash },
  rules: {
    ...lodash.configs.recommended.rules,
    'lodash/chaining': 'off',
    'lodash/import-scope': ['error', 'member'],
    'lodash/prefer-constant': 'off',
    'lodash/prefer-lodash-typecheck': 'off',

    // ---
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-noop': 'off',
  },
}
