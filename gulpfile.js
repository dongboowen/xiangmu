/**
 * Created by Administrator on 2017/5/10 0010.
 */
<<<<<<< HEAD
=======

>>>>>>> bdc70c801b5155df2eb16b0113f205aaf5853964
var gulp = require("gulp");
var less = require("less");
var aa   = require("gulp-load-plugins")();
gulp.task('myless', function () {
     gulp.src('app/styles/*.less')
        .pipe(aa.less())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('dist',function () {
    gulp.watch("app/styles/*.less",["myless"]);
});
<<<<<<< HEAD
=======

>>>>>>> bdc70c801b5155df2eb16b0113f205aaf5853964
