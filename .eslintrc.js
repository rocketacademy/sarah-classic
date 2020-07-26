module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  // Markdown setup from here https://github.com/eslint/eslint-plugin-markdown
  plugins: [
    'markdown',
  ],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  rules: {
  },
};
