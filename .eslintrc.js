module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/core-modules': ['vuetify', 'vuetify/es5/util/colors'],
    'import/resolver': {
      alias: {
        map: [['@', '.']],
        extensions: ['.vue', '.js'],
      },
    },
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['default'],
    }],
  },
};
