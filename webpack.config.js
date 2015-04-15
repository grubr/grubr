'use strict';

module.exports = {
  context: __dirname + '/client/',
  entry: './app.js',
  output: {
    path: __dirname + '/build/',
    filename: 'build.js'
  },
};
