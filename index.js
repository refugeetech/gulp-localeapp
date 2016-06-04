var gutil = require('gulp-util')
var yml = require('yaml')
var request = require('request')
function string_src (filename, string) {
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new gutil.File({ cwd: '', base: '', path: filename, contents: new Buffer(string) }))
    this.push(null)
  }
  return src
}

function downloadLocales (options) {
  if (!options || !options.apiKey) throw new Error('options.apiKey is required')

  var stream = require('merge-stream')()
  request(`https://api.localeapp.com/v1/projects/${options.apiKey}/translations/all.yml`, function (err, raw, body) {
    if (err) throw err
    var languages = yml.eval(body)
    Object.keys(languages).map(function (key) {
      var string = JSON.stringify(languages[key])
      stream.add(string_src(`${key}.json`, string))
    })
  })
  return stream
}

module.exports = downloadLocales

