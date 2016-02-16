var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;

gulp.task('start', function() {
  nodemon({
    script: 'server.js'
  })
});

gulp.task('scripts', function() {
  gulp.src(['app/js/**/*.js', '!app/js/**/*/.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream:true}));
});

gulp.task('html', function() {
  gulp.src(['app/**/*.html'])
  .pipe(reload({stream:true}));
});

gulp.task('handlebars', function() {
  gulp.src(['app/**/*.handlebars'])
  .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: "./app/"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('views/**/*.handlebars', ['handlebars']);
});

gulp.task('default', ['browser-sync', 'start', 'watch']);
