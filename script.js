const path = require('path');
module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'production',
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
	      {
	        test: /\.scss$/i,
	        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	      }
	  ],
	},
	optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
      }
}
