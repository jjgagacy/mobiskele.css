var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var compatibility = [
    'last 2 versions',
    'ie >= 9',
    'android >= 4.4',
    'ios >= 7',
];

// compile scss
gulp.task('sass', function() {
    var plugins = [
        autoprefixer({Browserslist: {browsers: compatibility}}),
        cssnano()
    ];
    return gulp.src(['src/mobiskele.scss'])
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
gulp.task('build', gulp.series('sass'));
