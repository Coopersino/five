// gulp.task("style", function() {
//     gulp.src("less/app.less")
//         .pipe(plumber())
//         .pipe(less())
//         .pipe(postcss([
//             autoprefixer({browsers: [
//                 "last 1 version",
//                 "last 2 Chrome versions",
//                 "last 2 Firefox versions",
//                 "last 2 Opera versions",
//                 "last 2 Edge versions"
//             ]}),
//             mqpacker({sort: true})
//         ]))
//         .pipe(gulp.dest("build/css"))
//         .pipe(minify())
//         .pipe(rename("style.min.css"))
//         .pipe(gulp.dest("build/css"))
//         .pipe(server.reload({stream: true}));
// });
//
// 'use strict';
//
// module.exports = function() {
//     $.gulp.task('sass', function() {
//         return $.gulp.src('./source/style/app.scss')
//             .pipe($.gp.sourcemaps.init())
//             .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
//             .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
//             .pipe($.gp.sourcemaps.write())
//             .pipe($.gulp.dest($.config.root + '/assets/css'))
//             .pipe($.browserSync.stream());
//     })
// };

'use strict';
module.exports = function() {
    $.gulp.task('less', function() {
        return $.gulp.src('./source/style/app.less')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.less()).on('error', $.gp.notify.onError({ title: 'Style' }))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream());
    })
};