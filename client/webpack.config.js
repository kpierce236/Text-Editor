const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['main'], // Specify entry chunks to include in the HTML file
      }),
      new WebpackPwaManifest({
        filename: 'manifest.json',
        name: 'J.A.T.E',
        short_name: 'JATE',
        description: 'Just Another Text Editor ',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes for different devices
            purpose: 'any maskable',
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js', // Path to your service worker file
        swDest: 'service-worker.js', // Output filename for the service worker
      }),
    ],

    module: {
      rules: [
        // CSS loader configuration
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Babel loader configuration
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
