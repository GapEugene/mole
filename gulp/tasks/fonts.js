module.exports = () => {
  $.gulp.task('fonts', () => {
    return $.gulp.src('./dev/fonts/**/*.{woff,woff2,eot,ttf}')
      .pipe($.gulp.dest('./build/assets/fonts'));
  });
};
