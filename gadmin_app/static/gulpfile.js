const {src, dest} = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const watch = require('gulp-watch')

function sass() {
  return src('./styles/assets/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(dest('./styles/dest'))
}

exports.sass = sass

function watch_scss(){
  watch('./styles/assets/*.scss', ['sass']).on('change', ()=>{
    sass()
  });
};
exports.sass = sass
exports.watch_scss = watch_scss