var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var rename = require('gulp-rename');

gulp.task('styles', function () {
  console.log('Compiling styles...');
  gulp
    .src('./src/sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('assets', function () {
  console.log('Compiling assets...');
  gulp
    .src('./src/assets/*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function () {
  console.log('Compiling fonts...');
  gulp
    .src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('views', function buildHTML() {
  console.log('Compiling views...');
  gulp
    .src('./src/views/*.pug')
    .pipe(pug())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['styles', 'assets', 'fonts', 'views']);

gulp.task('watch', [], () => {
    console.log('Watching over your project...');
    gulp.watch(
      ['./src/views/**/*.pug','./src/sass/**/*.scss', './src/assets/*.*', './src/fonts/*.*'],
      ['build'], 
      event => { console.log(`Event ${event.type} ended`) }
    );
});

gulp.task('default', ['build', 'watch']);