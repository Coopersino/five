'use strict';

module.exports = function() {
    $.gulp.task('js:plugins', function() {
        return $.gulp.src($.path.plugins)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.concat('plugins.min.js'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/assets/js'))
    })
};
