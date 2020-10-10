module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    // Markdown setup from here https://github.com/eslint/eslint-plugin-markdown
    'plugin:markdown/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: [
    'spellcheck',
  ],
  // ESLint settings for Gitbook JavaScript
  rules: {
    // Gitbook formatting
    // Sometimes we have partial code that doesn't need semicolons
    semi: 'off',
    // Sometimes we have partial code that doesn't warrant variable usage
    'no-unused-vars': 'off',
    // Sometimes we have partial code that doesn't warrant expression usage
    'no-unused-expressions': 'off',
    // Sometimes we have partial code that assumes a prior definition above
    'no-undef': 'off',

    // Course curriculum exceptions
    // Don't enforce ===
    eqeqeq: 'off',
    // Disable func-names rule so that we can have anonymous functions
    'func-names': 'off',
    // Allow console for students to debug
    'no-console': 'off',
    // Enable var instead of just let and const
    'no-var': 'off',
    // Enable + sign to concatenate strings
    'prefer-template': 'off',
    // Don't require a += b instead of a = a + b
    'operator-assignment': 'off',
    // Don't require vars to be declared at the top
    'vars-on-top': 'off',

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
