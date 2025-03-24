/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-key': 'warn',
  },
};
