/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'eslint:recommended'
  ],
  env: {
    'vue/setup-compiler-macros': true,
    'browser': true,
    'es2021': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  overrides: [
    {
      files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    camelCase: 'off',
    'comma-dangle': 'error',
    'default-case': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'no-alert': 'off',
    'no-await-in-loop': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-labels': 'off',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-return-await': 'error',
    'no-shadow': 'error',
    'no-useless-catch': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quotes': ['error', 'single'],
    'require-await': 'error',
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'template-curly-spacing': 'off'
  }
}
