
// Load plugins
const autoprefixer = require('autoprefixer');
const browsersync = require("browser-sync").create();
const cssimport = require('postcss-import');
const cssnano = require("cssnano");
const cssvars = require('postcss-simple-vars');
const gulp = require('gulp');
const hexrgba = require("postcss-hexrgba");
const mixins = require("postcss-mixins");
const nested = require('postcss-nested');
const plumber = require("gulp-plumber");
const postcss = require('gulp-postcss');
const webpack = require('webpack');
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");


// BrowserSync
function browserSync(done) {
    browsersync.init({
        proxy: 'http://localhost:81/projects/meissam-wp-starter-theme'
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
  }




  // CSS task
function css() {
    const CSS_SOURCES = ['assets/css/style.css','assets/css/rtl.css','assets/css/admin.css'];
    return gulp.src(CSS_SOURCES)
    .pipe(plumber())
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer,cssnano]))
    .pipe(gulp.dest('./'))
    .pipe(browsersync.stream());
}


// Transpile, concatenate and minify scripts
function scripts() {
    return (
      gulp
        .src(["./assets/js/app.js"])
        .pipe(plumber())
        .pipe(webpackstream(webpackconfig, webpack))
        // folder only, filename is specified in webpack config
        .pipe(gulp.dest("./assets/public/js"))
        .pipe(browsersync.stream())
    );
  }



// Watch files
function watchFiles() {
    gulp.watch("./assets/css/**/*", gulp.series(css, browserSyncReload));
    gulp.watch("./assets/js/**/*", gulp.series(scripts, browserSyncReload));
}
  

const watch = gulp.parallel(watchFiles, browserSync);
exports.watch = watch;