var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');
function makeCSS(){
    return src('src/*.scss')
           .pipe(sass())
           .pipe(dest('dist/css'));
}

exports.default = function(){
    watch('src/*.scss', makeCSS);
}

// exports.default = makeCSS