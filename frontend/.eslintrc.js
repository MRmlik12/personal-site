module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  ignorePatterns: ["*.d.ts"],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "require-jsdoc": "off",
    "indent": "off"
  }
}
