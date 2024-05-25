const perfectionist_natural = require('eslint-plugin-perfectionist/configs/recommended-natural')

module.exports = {
  files: ['**/*.{js,ts,tsx}'],
  ...perfectionist_natural,
  rules: {
    ...perfectionist_natural.rules,
    'perfectionist/sort-imports': [
      'warn',
      {
        'custom-groups': {
          type: {
            react: ['react', 'react-native', 'react-native-reanimated'],
          },
          value: {
            react: ['react', 'react-native', 'react-native-reanimated'],
          },
        },
        groups: [
          'react',
          ['builtin', 'external'],
          ['internal', 'internal-type'],
          ['parent', 'sibling', 'index', 'parent-type', 'sibling-type', 'index-type'],
          'unknown',
          'type',
          'side-effect',
        ],
        'internal-pattern': [
          '~/**',
          'App/**',
          'Assets/**',
          'Components/**',
          'Hooks/**',
          'Modals/**',
          'Navigators/**',
          'Stores/**',
          'Translations/**',
          'Utils/**',
        ],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        type: 'natural',
        'ignore-case': true,
        'custom-groups': {
          callback: 'on*',
          as: 'as',
          ref: 'ref',
          key: 'key',
          style_shorthands: ['bg', 'm', 'p', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'pt', 'pr', 'pb', 'pl', 'px', 'py'],
        },
        groups: [
          'key',
          'as',
          'ref',
          'shorthand',
          'style_shorthands',
          'unknown',
          'callback',
          // 'multiline',
        ],
      },
    ],

    'perfectionist/sort-named-imports': 'warn',

    'perfectionist/sort-object-types': 'off',

    'perfectionist/sort-objects': 'off',

    'perfectionist/sort-classes': 'off',

    'perfectionist/sort-union-types': 'off',
  },
}
