// deps:
// eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue vue-eslint-parser @vue/eslint-config-typescript

module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  extends: [
    // 'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // for vue2.x
    // 'plugin:vue/recommended',
    '@vue/typescript',
    'prettier',
  ],

  plugins: ['prettier'],

  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    // 'import/extensions': ['error', { ts: 'never' }],
    // 'import/no-unresolved': ['error', { ignore: ['virtual'] }],
    // 'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'vue/require-v-for-key': 'warn',
    'no-unused-vars': 'off',
  },
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: 'node_modules/@vue/cli-service/webpack.config.js',
    //   },
    // },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        // "alwaysTryTypes": true,
        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
        // use <root>/path/to/folder/tsconfig.json
        // "project": "path/to/folder",
      },
    },
  },
}
