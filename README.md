gulp-localeapp
===

Downloads keys from localeapp in your gulp flow.

You will need an apikey (find it in settings)

## Usage

    npm install --save gulp-localeapp


Example

    gulp.task('localeapp', function (done) {
      return localeapp({apiKey: 'yourapikey'})
        .pipe(gulp.dest('path/to/json'))
    })


## LICENSE

MIT