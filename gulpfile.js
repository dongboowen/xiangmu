/**
 * Created by Administrator on 2017/5/10 0010.
 */

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

