const unicorn = require('eslint-plugin-unicorn')

module.exports = {
  files: ['**/*.{js,ts,tsx}'],
  plugins: { unicorn },
  rules: {
    ...unicorn.configs.recommended.rules,

    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/require-array-join-separator': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-await-expression-member': 'off',

    // --- TODO: Enable back ---
    'unicorn/consistent-destructuring': 'warn',
  },
}
