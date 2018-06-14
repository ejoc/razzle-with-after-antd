'use strict';
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  modify(config, { target, dev }, webpack) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.less$/,
            use: dev
            ? [
              'style-loader',
              {
                loader: 'css-loader', // translates CSS into CommonJS
                options: target === 'node' ? {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[path]__[name]___[local]',
                } : {
                  modules: true,
                },
              }, 
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
              }
            }]
            : [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader', // translates CSS into CommonJS
                options: target === 'node' ? {
                  modules: true,
                  importLoaders: 1,
                  minimize: true,
                  localIdentName: '[path]__[name]___[local]',
                } : {
                  modules: true,
                },
              }, 
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
              }
            }]
          },
        ],
      },
      plugins: [
        ...config.plugins,
        new MiniCssExtractPlugin({
          filename: 'static/css/bundle.[contenthash:8].css',
          // chunkFilename: 'static/css/[id].css',
          allChunks: true,
        })
      ]
    };
  }
};