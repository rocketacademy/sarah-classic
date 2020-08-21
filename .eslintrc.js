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
  },
  // Markdown setup from here https://github.com/eslint/eslint-plugin-markdown
  plugins: [
    'markdown',
    'spellcheck',
  ],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  // ESLint settings for Gitbook JavaScript
  rules: {
    // Gitbook formatting
    semi: 'off',
    'no-unreachable': 'off',
    'no-unused-vars': 'off',
    // Disable func-names rule so that we can have anonymous functions
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'no-undef': 'off',
    'no-console': 'off',

    // Course curriculum exceptions
    // Don't require vars to be declared at the top
    'vars-on-top': 'off',
    // Enable var instead of just let and const
    'no-var': 'off',
    // Enable + sign to concatenate strings
    'prefer-template': 'off',
    // Don't enforce ===
    eqeqeq: 'off',
    // Don't require a += b instead of a = a + b
    'operator-assignment': 'off',

    // Spell checker
    'spellcheck/spell-checker': [1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_GB',
        skipWords: [
          'etc',
          'gitbook',
          'dict',
          'aff',
          'utils',
        ],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+[-\\w\\.]+$', // For MIME Types
        ],
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 2,
      },
    ],
  },
};
