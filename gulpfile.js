const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('driver',function(){
    return gulp.src('src/driver/*')
        .pipe(zip('driver.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('restaurant',function(){
    return gulp.src('src/restaurant/*')
        .pipe(zip('restaurant.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('ebs',function(){
    return gulp.src('src/ebs/*')
        .pipe(zip('ebs.zip'))
        .pipe(gulp.dest('dist'))
})

gulp.task('cliente',function(){
    return gulp.src('src/cliente/*')
        .pipe(zip('cliente.zip'))
        .pipe(gulp.dest('dist'))
})


gulp.task('default', gulp.series('driver', 'restaurant', 'ebs', 'cliente'))

