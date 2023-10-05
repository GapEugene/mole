module.exports = () => {
  $.gulp.task('libraries-styles', () => {
    return $.gulp.src('./dev/libraries/**/*.css')
      .pipe($.gulp.dest('./build/assets/libraries'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });

  $.gulp.task('libraries-scripts', () => {
    return $.gulp.src('./dev/libraries/**/*.js')
      .pipe($.gulp.dest('./build/assets/libraries'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });
};
