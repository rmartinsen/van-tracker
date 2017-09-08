
module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: __dirname,
		filename: "./build/bundle.js"
	},
	module: {
		loaders: [
			{test: /\.jsx?$/,
		     loader: "babel-loader",
		     exclude: /node_modules/,
		     query: {
		     	presets: ["es2015", "react", "stage-2"]
		     }
		    }
		]
	}
}
