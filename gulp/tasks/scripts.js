const include = require('gulp-include');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

module.exports = () => {
  $.gulp.task('scripts', () => {
    return $.gulp.src('./dev/scripts/main.js')
      .pipe(include({
        includePaths: [
          __dirname + '/../../node_modules',
        ],
      }))
      .pipe(babel({
        presets: ['@babel/env'],
      }))
      .pipe(uglify())
      .pipe($.gulp.dest('./build/assets/scripts'))
      .pipe($.browserSync.reload({
        stream: true,
      }));
  });
};
