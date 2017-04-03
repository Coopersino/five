'use strict';

module.exports = function() {
  $.gulp.task('js:mainSlider', function() {
    return $.gulp.src($.path.mainSlider)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('mainSlider.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};