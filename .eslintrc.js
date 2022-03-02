const prettier = require('./prettier.config')
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['react-app', 'prettier'],
	plugins: ['react', 'prettier'],
	parser: '@typescript-eslint/parser',
	rules: {
		'import/prefer-default-export': 'off',
		'prettier/prettier': ['error', prettier],
	},
}
