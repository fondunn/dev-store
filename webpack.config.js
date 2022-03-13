const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
            components: path.join(__dirname, 'src/components/'),
            helpers: path.join(__dirname, 'src/helpers/'),
            data: path.join(__dirname, 'src/data/'),
            
        },
        extensions: ['.js', '.jsx', '.css', '.mjs']
    },
    module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                plugins: ["lodash"],
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  {
                    plugins: ["@babel/plugin-proposal-class-properties"],
                  },
                ],
              },
            },
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.svg$/,
            loader: "svg-inline-loader",
          },
        ],
      },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpack({
            template: './src/index.html',
            inject: true
        })
    ]
}