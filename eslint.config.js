import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: 'off',
      'no-unused-vars': 'warn',
    },
  },
];
