var gulp = require('gulp');    // import gulp
var sass = require('gulp-sass');    // import gulp -sass

gulp.task('firstname', function(){
    console.log('My First Name is Pankaj');
});

gulp.task('lastname', function(){
    console.log('My Last Name is Kolhe');
});

gulp.task('fullname', function(){
    gulp.start('firstname');
    gulp.start('lastname');
});

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')  // source file
            .pipe(sass())                   // pass this file as parameter to sass() through pipe
            .pipe(gulp.dest('app/css'))     // create the destination file with converted css
});
