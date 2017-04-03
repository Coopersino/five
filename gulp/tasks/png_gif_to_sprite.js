'use strict';

module.exports = function() {
    $.gulp.task('png_gif_to_sprite', function () {
        var spriteDataPng = $.gulp.src('./source/images/icons/*.png').pipe($.gp.spritesmith({
            imgName: 'spritePng.png',
            cssName: 'spritePng.css'
        }));
        var imgPngStream = spriteDataPng.img.pipe($.gulp.dest($.config.root + '/assets/img'));
        var spriteDataPngStream = spriteDataPng.css.pipe($.gulp.dest($.config.root + '/assets/css'));
        var merge = require('merge-stream');
        return  merge(imgPngStream, spriteDataPngStream);

    });
};
