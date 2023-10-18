module.exports = () => {
  $.gulp.task('json-assets', () => {
    return $.gulp.src('./dev/json/**/*.json')
      .pipe($.gulp.dest('./build/assets/json'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });
};
