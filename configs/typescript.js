const typescript_plugin = require('@typescript-eslint/eslint-plugin')
const typescript_parser = require('@typescript-eslint/parser')

module.exports = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: typescript_parser,
    // parserOptions: {
    //   project: true,
    // },
  },
  plugins: {
    '@typescript-eslint': typescript_plugin,
  },
  rules: {
    // ---
    // ...typescript_plugin.configs.base.rules,
    ...typescript_plugin.configs.recommended.rules,
    ...typescript_plugin.configs.stylistic.rules,
    ...typescript_plugin.configs['eslint-recommended'].rules,
    // ...typescript_plugin.configs['recommended-type-checked'].rules,
    // ...typescript_plugin.configs['stylistic-type-checked'].rules,

    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],

    // Requires type checking
    // '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    // '@typescript-eslint/no-misused-promises': 'warn',

    // ---
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/no-explicit-any': 'off',

    // --- TODO: Enable back ---
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // ---
    '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'warn',
    //   {
    //     args: 'after-used',
    //     argsIgnorePattern: '^_',
    //     caughtErrors: 'all',
    //     caughtErrorsIgnorePattern: '^_',
    //     destructuredArrayIgnorePattern: '^_',
    //     ignoreRestSiblings: true,
    //     varsIgnorePattern: '^_',
    //   },
    // ],

    // ---
    // '@typescript-eslint/naming-convention': [
    //   'warn',
    //   {
    //     format: ['PascalCase'],
    //     selector: 'typeLike',
    //   },
    //   {
    //     format: ['camelCase', 'PascalCase'],
    //     selector: 'function',
    //   },
    //   {
    //     format: ['snake_case', 'PascalCase', 'UPPER_CASE'],
    //     selector: 'variable',
    //   },
    //   {
    //     format: ['camelCase', 'PascalCase'],
    //     selector: 'variable',
    //     types: ['function'],
    //   },
    //   // {
    //   //   format: ['snake_case', 'UPPER_CASE'],
    //   //   prefix: [
    //   //     'is_',
    //   //     'are_',
    //   //     'should_',
    //   //     'has_',
    //   //     'can_',
    //   //     'did_',
    //   //     'will_',
    //   //     'IS_',
    //   //     'ARE_',
    //   //     'SHOULD_',
    //   //     'HAS_',
    //   //     'CAN_',
    //   //     'DID_',
    //   //     'WILL_',
    //   //   ],
    //   //   selector: 'variable',
    //   //   types: ['boolean'],
    //   // },
    //   {
    //     filter: {
    //       match: true,
    //       regex: '^.*[rR]ef$',
    //     },
    //     format: ['snake_case'],
    //     selector: 'variable',
    //   },
    // ],
  },
}
