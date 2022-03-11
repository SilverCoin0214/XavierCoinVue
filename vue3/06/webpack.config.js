/*
 * @Author: your name
 * @Date: 2022-02-21 11:38:16
 * @LastEditTime: 2022-02-25 14:59:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3/06/webpack.config.js
 */
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js'
    },
    module: {
        rule: [
            {
                test: '/\.css$/',
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            // {
            //     test: '/\.(jpg|png|gif|svg)$/',
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             outputPath: 'img',
            //             name: "[name]_[hash:6].[ext]"
            //         }
            //     }
            // },
            {
                test: '/\.(jpg|png|gif|svg)$/',
                type: 'asset',
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            },
            {
                test: "/\.js$/",
                // use: {
                //     loader: "babel-loader",
                //     options: {
                //         // plugins: [
                //         //     "@babel/plugin-transform-functions",
                //         // ]
                //         presets: [
                //             "@babel-preset-env",
                //         ]
                //     }
                // }
                loader: "babel-loader",

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin()
    ]
}
