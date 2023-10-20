module.exports = () => {
  $.gulp.task('sounds-assets', () => {
    return $.gulp.src('./dev/sounds/**/*.mp3')
      .pipe($.gulp.dest('./build/assets/sounds'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });
};
