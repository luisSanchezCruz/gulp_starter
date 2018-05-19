const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const server = require('live-server');

/*  gulp.task - define tasks
    gulp.src - point to files to use
    gulp.dest -point to the folder to output
    gulp.watch - watch files and folders for changes
*/ 

//copy all html files
gulp.task('copyHtml', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'));
});

//minify images
gulp.task('imagemin', function() {
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

//minify scrips and concat all jss files into bundle.js
gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
//compile all scss files
gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/css'));
});

//display a console message
gulp.task('message', function() {
    return console.log('Building your site!');
});

//execute all task
gulp.task('default', ['message', 'copyHtml' , 'imagemin', 'scripts', 'sass']);


//watch for changes
gulp.task('watch',function() {
    gulp.watch('src/*.html',['copyHtml']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/images/*',['imagemin']);
    
    //start the server after changes
    server.start({
        port: '8080',
        root: 'dist'
    });
});


