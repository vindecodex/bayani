const path = require('path');

module.exports = {
	entry: './core/index.ts',
	mode: 'development',
	module: {
		rules: [{
			use: 'ts-loader',
			exclude: /node_modules/,
		}]
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'dist')
	}
}