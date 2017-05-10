/**
 * Created by Administrator on 2017/5/10 0010.
 */
<<<<<<< HEAD
//var gulp = require("gulp");
//gulp.task("show",function(){
//    console.log("hello gulp !");
//})
var gulp = require('gulp');
var less =require("less");
var plugins = require("gulp-load-plugins")();
gulp.task("myless",function () {
    gulp.src("app/scripts/*.less")
        .pipe(plugins.less())
        .pipe(gulp.dest("dist/css/"))
})
gulp.task("dist",function(){
    gulp.watch("app/scripts/*.less",["myless"]);
})
=======
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
>>>>>>> 233bcfee1f307af01d72cb8ad403e1302ca7cb25
