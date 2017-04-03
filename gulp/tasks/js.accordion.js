'use strict';

module.exports = function() {
  $.gulp.task('js:accordion', function() {
    return $.gulp.src($.path.accordion)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('accordion.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};