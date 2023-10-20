module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./dev/markup/**/*.html', $.gulp.series('markup'));
    $.gulp.watch('./dev/styles/**/*.{sass,scss}', $.gulp.series('styles'));
    $.gulp.watch('./dev/scripts/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('./dev/libraries/**/*.js', $.gulp.series('libraries-scripts'));
    $.gulp.watch('./dev/libraries/**/*.css', $.gulp.series('libraries-styles'));
    $.gulp.watch('./dev/json/**/*.json', $.gulp.series('json-assets'));
    $.gulp.watch('./dev/json/**/*.mp3', $.gulp.series('sounds-assets'));
    $.gulp.watch('./dev/images/**/*.{jpg,png,svg,gif,ico}', $.gulp.series('images'));
    $.gulp.watch('./dev/fonts/**/*.{woff,woff2,eot,ttf}', $.gulp.series('fonts'));
  });
};
