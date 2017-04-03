'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js'),
        accordion: require('./gulp/paths/accordion.js'),
        mainSlider: require('./gulp/paths/mainSlider.js'),
        plugins: require('./gulp/paths/js.plugins.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    named: require('vinyl-named'),
    plumber: require('gulp-plumber'),
    webpack: require('gulp-webpack'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
           'js:accordion',
           'js:mainSlider',
           'js:plugins'
    //     'copy_json'
    // ),
    // $.gulp.parallel(
    //     // 'js:slider',
    //     'js:webpack'
    ),
    $.gulp.parallel(
        'less',
        'pug',
        'js:foundation',
        'js:process',
        'copy:image',
        'css:foundation',
        // 'sprite:svg',
        'png_gif_to_sprite',
        'copy_fonts'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));