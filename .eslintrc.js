module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 6
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"eslint:recommended",
	],
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"]
	},
	env: {
		browser: true,
		node: true,
	}
}