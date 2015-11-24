module.exports = function () {
  var src = 'src/';

  var config = {
    /**
     * File paths
     */
    build: './build/',
    css: src + '**/*.css',
    html: src + '**/*.html',
    images: src + 'images/**/*.*',
    imagesRoot: 'images',
    scss: src + '**/*.scss',
    src: src,
    ts: src + '**/*.ts',
    tsMaps: '.', // write map in same location as js

    /**
     * Configs
     */
    defaultPort: '7203'
  };

  return config;
};
