module.exports = () => {
  $.gulp.task('styles', () => {
    return $.gulp.src('./dev/styles/main.scss')
      .pipe($.gp.sass({
        'outputStyle': 'compressed',
      }))
      .pipe($.gp.autoprefixer({
        browsers: ['last 10 version'],
      }))
      .pipe($.gulp.dest('./build/assets/styles'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });
};
