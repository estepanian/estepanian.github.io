var gulp = require('gulp'),
    sass = require('gulp-sass');

var clConfig = {
    inputDirectory: 'cl/*.scss',
    outputDirectory: 'cl/',
    options: {
        outputStyle: 'expanded'
    }
}

gulp.task('build-cl', function() {
    return gulp
        .src(clConfig.inputDirectory)
        .pipe(sass(clConfig.options).on('error', sass.logError))
        .pipe(gulp.dest(clConfig.outputDirectory));
});

gulp.task('watch', function() {
    gulp.watch(clConfig.inputDirectory, ['build-cl']);
});