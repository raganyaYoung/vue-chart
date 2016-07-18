const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildPath = path.resolve(__dirname, 'build');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/index.js'),
  ],

  //Server Configuration options
  devServer:{
    contentBase: 'src/index',  //Relative directory for base of server
    hot: true,        //Live-reload
    inline: true,
    port: 5000,        //Port Number
    host: '0.0.0.0',  //Change to '0.0.0.0' for external facing server
    historyApiFallback: true,
    //proxy /api/* to a node server
    // proxy: {
    //   '/api/*': {
    //       target: 'http://localhost:8002',
    //   }
    // },
  },

  output: {
    path: buildPath,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192&name=/[hash].[ext]'
      },
    ],
  },

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      sass: ExtractTextPlugin.extract('css!sass')
    }
  },

  plugins: [
    new ExtractTextPlugin("style.css"),

    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    // new webpack.NoErrorsPlugin(),
    // //Moves files
    // new TransferWebpackPlugin([
    //   {from: 'www'},
    // ], path.resolve(__dirname, "src")),
  ],

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: [
      'transform-runtime',
    ]
  },

};

module.exports = config
