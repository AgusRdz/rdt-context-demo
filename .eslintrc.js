const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.ERROR,
    camelcase: RULES.ERROR,
    'spaced-comment': RULES.ERROR,
    'prefer-const': RULES.ERROR,
    'react/no-unknown-property': RULES.ERROR,
    'no-unneeded-ternary': RULES.ERROR,
    'no-irregular-whitespace': RULES.ERROR,
    'react/no-unescaped-entities': RULES.ERROR,
    'import/no-duplicates': RULES.ERROR,
    'react/jsx-key': RULES.ERROR,
    'one-var': RULES.ERROR,
    'react/display-name': RULES.OFF,
    'no-prototype-builtins': RULES.ERROR,
    'no-empty': RULES.ERROR,
    'no-return-assign': RULES.ERROR,
    'dot-notation': RULES.ERROR,
    'no-new': RULES.ERROR,
    'new-cap': RULES.ERROR,
    'no-var': RULES.ERROR
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
