const {src, dest, watch} = require('gulp')
const scss = require('gulp-sass')(require('sass'))
// scss.compiller = require('node-sass')


function compile_scss() {
  return src(['./styles/assets/**/*.scss'])
    .pipe(scss().on('error', scss.logError))
    .pipe(dest('./styles/dest/'))
}



function watch_scss(){
  watch('./styles/assets/', compile_scss)
}
exports.compile_scss = compile_scss
exports.watch_scss = watch_scss