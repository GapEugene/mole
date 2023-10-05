const fileinclude = require('gulp-file-include');

module.exports = () => {
  $.gulp.task('markup', () => {
    return $.gulp.src('./dev/markup/pages/*.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
      }))
      .pipe($.gulp.dest('./build'))
      .on('end', $.browserSync.reload);
  });
};
