const prettier = require('./prettier.config')
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['react-app', 'prettier'],
	plugins: ['react', 'prettier', 'prefer-arrow-functions'],
	parser: '@typescript-eslint/parser',
	rules: {
		'import/prefer-default-export': 'off',
		'prettier/prettier': ['error', prettier],
		'prefer-arrow-callback': 'error',
		'arrow-body-style': 'error',
		'prefer-arrow-functions/prefer-arrow-functions': [
			'warn',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'unchanged',
				singleReturnOnly: false,
			},
		],
	},
}
