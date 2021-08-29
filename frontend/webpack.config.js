const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const rawRules = {test: /\.txt$/, use: 'raw-loader'}
const typescriptRules = {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "ts-loader"
        }
    ]
}
const sassRules = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
    ],
}

const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shoutbox.bundle.js',
};

const mode = 'development'


module.exports = {
    entry: './src/index.tsx',
    output: output,
    cache: false,
    mode,
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devServer: {
        contentBase: './dist',
        inline: true,
        quiet: false,
    },
    module: {
        rules: [
            typescriptRules, rawRules, sassRules, {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.png/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',

                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: mode === 'development' ? "DEVELOPMENT" : 'Output Management',
            template: "./src/index.pug",
            hash: true
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            'earcut': 'earcut'
        }),
    ],
};
