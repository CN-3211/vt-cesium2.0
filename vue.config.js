/*
 * @Date: 2022-03-29 16:52:36
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-01 13:19:10
 * @FilePath: /vt-cesium2.0/vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(function () {
        return 'src/components/base-icon/svgs'
      })
      .end()

    config.module
      .rule('jtsvgicon')
      .test(/\.svg$/)
      .include.add(function () {
        return 'src/components/base-icon/svgs'
      })
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
  },
  configureWebpack: {
    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin({
        patterns: [
          {from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers"},
          {from: "node_modules/cesium/Build/Cesium/ThirdParty", to: "ThirdParty"},
          {from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets"},
          {from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets"}
        ]
      }),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify("./") // 相对路径build可用
        // CESIUM_BASE_URL: JSON.stringify("") // 绝对路径dev环境可用
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: '@open-wc/webpack-import-meta-loader',
          },
        },
      ],
      // Removes these errors: "Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"
      // https://github.com/AnalyticalGraphicsInc/cesium-webpack-example/issues/6
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
    }
  }
})