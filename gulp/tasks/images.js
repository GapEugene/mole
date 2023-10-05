module.exports = () => {
  $.gulp.task('images', () => {
    return $.gulp.src('./dev/images/**/*.{jpg,png,svg,gif,ico}')
      .pipe($.gulp.dest('./build/assets/images'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });
};
