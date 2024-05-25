const react_jsx_runtime = require('eslint-plugin-react/configs/jsx-runtime.js')
const react_recommended = require('eslint-plugin-react/configs/recommended.js')
const react_hooks = require('eslint-plugin-react-hooks')
const react_native = require('eslint-plugin-react-native')

module.exports = [
  {
    files: ['**/*.{js,ts,tsx}'],
    ...react_recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react_recommended.rules,
      'react/display-name': 'off',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/prop-types': 'off',
      'react/self-closing-comp': 'error',

      // ---
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // --- TODO: Enable back ---
      'react/no-unescaped-entities': 'off',
      'react/no-unstable-nested-components': 'off',
      // 'react/jsx-filename-extension': [
      //   'error',
      //   {
      //     allow: 'as-needed',
      //     extensions: ['.tsx'],
      //   },
      // ],
    },
  },

  {
    files: ['**/*.{js,ts,tsx}'],
    ...react_jsx_runtime,
    rules: {
      ...react_jsx_runtime.rules,
      'react/jsx-uses-vars': 'off',
    },
  },

  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      'react-hooks': react_hooks,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },

  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      'react-native': react_native,
    },
    rules: {
      'react-native/no-raw-text': 'off',
    },
  },
]
