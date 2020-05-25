module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        'eslint:recommended',
        '@vue/prettier'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        indent: ['error', 4],
        'space-before-function-paren': ['error', 'never'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', { singleQuote: true }]
    }
}
