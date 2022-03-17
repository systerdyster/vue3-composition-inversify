/* jshint esversion: 6 */

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const terserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');


module.exports = (env = {}, argv = {}) => {
    const isProduction = argv.mode === 'production';
    process.env.NODE_ENV = argv.mode;

    var config = {
        entry: {
            index: path.join(__dirname, "src", "index.ts")
        },

        output: {
            path: path.resolve(__dirname, "www"),
            publicPath: '/',
            filename: (() => {
                if (isProduction) return "[name]-[chunkhash:14].min.js";
                else return "[name].js";
            })(),
            chunkFilename: (() => {
                if (isProduction) return "[name]-[chunkhash:14].min.js";
                else return "[name].js";
            })(),
        },

        target: 'web',
        devServer: {
            port: 3005,
            static: {
                directory: path.resolve(__dirname, "www"),
            },
            client: {
                logging: 'error',
                overlay: {
                    errors: true,
                    warnings: false,
                },
            }
        },

        optimization: {
            minimize: isProduction,
            minimizer: [new terserJSPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                  }
            }), new CssMinimizerPlugin()]
        },

        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
                inject: true,
                filename: 'index.html',
                title: 'vue3-composition-inversify',
                chunksSortMode: 'none'
            }),

            new miniCssExtractPlugin({
                filename: 'style-[contenthash:14].min.css'
            }),

            new webpack.DefinePlugin({
                __IS_PRODUCTION__: JSON.stringify(isProduction),
                __VUE_OPTIONS_API__: JSON.stringify(!isProduction),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(!isProduction)
            })
        ],

        performance: {
            hints: 'warning' //"warning", // error / false
        },

        watchOptions: {
            ignored: ['www/**/*.*', 'node_modules']
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ],
                    include: [path.join(__dirname, 'src')]
                },
                {
                    test: /.(pug|jade)$/,
                    use: [
                        { 
                            loader: 'html-loader',
                            options: {
                                minimize: false,
                                esModule: false
                            }
                        },
                        {
                            loader: 'pug-html-loader'
                        }],
                    include: [
                        path.join(__dirname, "src")
                    ]
                },
                {
                    test: /\.(css)$/,
                    use: [ { loader: miniCssExtractPlugin.loader },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                sourceMap: !isProduction
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: !isProduction,
                            }
                        }
                    ],
                    include: [path.join(__dirname, 'src/styles')]
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    type: 'asset/resource',
                    generator: {
                      filename: 'fonts/[hash][ext][query]'
                    },
                    include: [path.join(__dirname, 'src')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/i,
                    resourceQuery: { not: [/inline/] },
                    type: 'asset/resource',
                    generator: {
                      filename: 'images/[hash][ext][query]'
                    },
                    include: [path.join(__dirname, 'src')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/i,
                    resourceQuery:  /inline/,
                    type: 'asset/inline'
                }
            ]
        },

        resolve: {
            extensions: ['.ts', '.js', '.json', '.css', '.pug'],
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                'vue$': 'vue/dist/vue.esm-bundler.js',
                '__shared': path.resolve(__dirname, 'src/views/_shared'),
                '__business': path.resolve(__dirname, 'src/business')
            }
        }
    };

    if (isProduction) {
        config.devtool = false;
    } else {
        config.devtool = 'source-map';
        config.plugins.push(new ESLintPlugin({ extensions: ['ts'] }));
        config.plugins.push(new StylelintPlugin());
    }

    return config;
};
