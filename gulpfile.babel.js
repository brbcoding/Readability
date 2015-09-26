import gulp from 'gulp';
import babel from 'gulp-babel';
import path from 'path';
import rename from 'gulp-rename';

const paths = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

gulp.task('default', ['build:js']);
gulp.task('build:js', () => {
  gulp.src(path.join(paths.src, 'index.es6.js'))
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest(paths.build))
});

gulp.watch(path.join(paths.src, '**/*'), ['build:js']);
