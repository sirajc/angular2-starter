module.exports = function () {
  var client = './src/';

  var config = {
    /**
     * File paths
     */
    build: './build/',
    css: client + '**/*.css',
    html: client + '**/*.html',
    scss: client + '**/*.scss',
    src: client,
    ts: client + '**/*.ts',
    tsMaps: '.', // write map in same location as js

    /**
     * Configs
     */
    defaultPort: '7203'
  };

  return config;
};
