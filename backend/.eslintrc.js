module.exports = {

  extends: [
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'node'
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "space-before-function-paren": 0,
    "no-unused-vars": 0
  }
}
