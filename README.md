gulp-localeapp
===

Downloads keys from localeapp in your gulp flow.

You will need an apikey (find it in settings)

## Usage

    npm install --save gulp-localeapp


Example

    gulp.task('localeapp', function (done) {
      return localeapp({apiKey: 'yourapikey'})
        .pipe(gulp.dest('translations/'))
    })


Use with Angular-translate

    gulp.task('translate', ['localeapp'], function () {
      return gulp.src('translations/*.json')
        .pipe(angularTranslate({ module: 'app' }))
        .pipe(gulp.dest('www/js/configuration'))
    })


## LICENSE

MIT