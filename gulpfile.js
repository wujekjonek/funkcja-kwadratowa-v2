// xxxxxxxxxxxxxxxxxxxxxx


var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('concat', function () {
    gulp.src(['./funkcjakwadratowa/js/*.js'
        // './kalkulator/js/index.js'
        // './kalkulator/scss/index.css'
    ])
        .pipe(concat('funkcjacala.js'))
        // .pipe(uglify())            /*    trzeba uglify  */
        .pipe(gulp.dest('./dist/'))
});



