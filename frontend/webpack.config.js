const path = require('path');
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


const outputDev = {
    path: path.resolve(path.join(__dirname, '../backend/dist/public')),
    filename: 'shoutbox.bundle.js',
};


const output = {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: 'shoutbox.bundle.js',
};

const mode = process.env.NODE_ENV


module.exports = {
    entry: './src/index.tsx',
    output: mode === 'production' ? output :outputDev,
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
            title: mode === 'production' ? "Production" : 'DEVELOPMENT',
            template: "./src/index.pug",
            hash: true
        }),
        new CleanWebpackPlugin(),
    ],
};
