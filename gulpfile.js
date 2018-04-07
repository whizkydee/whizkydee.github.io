'use strict'

const gulp       = require('gulp')
const babel      = require('gulp-babel')
const sass       = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const connect    = require('gulp-connect')
const fs         = require('fs')

const parsed = JSON.parse(fs.readFileSync('./package.json'))

// file paths for assets
const paths = {
  index: './index.html',
  sass: 'src/sass/**/*.scss',
  script: 'src/js/**/*.js'
}

const allTasks = ['server', 'watch', 'transpile', 'sass']

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('transpile', () => {
  return gulp.src(paths.script)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', err => console.log(err))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task( 'server', () => connect.server({livereload: true}) )
gulp.task( 'reload', () => gulp.src(paths.index).pipe(connect.reload()) )

// handle changes and reload server afterwards.
gulp.task('watch', () => {
  gulp.watch(paths.script, ['transpile', 'reload'])
  gulp.watch(paths.sass, ['sass', 'reload'])
  gulp.watch(paths.index, ['reload'])
})

gulp.task('default', allTasks)
