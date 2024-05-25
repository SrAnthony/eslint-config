const eslint_js = require('@eslint/js')

module.exports = {
  files: ['**/*.{js,ts,tsx}'],
  rules: {
    ...eslint_js.configs.recommended.rules,
    'no-async-promise-executor': 'warn',
    'no-case-declarations': 'off',
    'no-promise-executor-return': 'warn',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'require-await': 'warn',
    'no-unused-vars': 'off',
    'semi': ['error', 'never'],
  },
}
