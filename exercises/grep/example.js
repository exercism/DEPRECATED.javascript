var fs = require('fs');
var readline = require('readline');

var FLAGS = {
  lineNumbers: '-n',
  onlyFilenames: '-l',
  anyCase: '-i',
  invert: '-v',
  entireLines: '-x'
  // fileNames: internal option
};

var grepFile = function (pattern, options, file, done) {
  var re = new RegExp(options.entireLines ? '^' + pattern + '$' : pattern, options.anyCase ? 'i' : '');
  var output = [];
  var lineNumber = 0;
  var fstream = fs.createReadStream(file)
    .on('error', done);

  readline.createInterface({input: fstream})
    .on('line', function (data) {
      var line = data;
      lineNumber++;
      if (re.test(line) !== options.invert) {
        if (options.onlyFilenames) {
          output = [file];
        } else {
          if (options.lineNumbers) {
            line = lineNumber + ':' + line;
          }
          if (options.fileNames) {
            line = file + ':' + line;
          }
          output.push(line);
        }
      }
    })
    .on('close', function () {
      done(null, output);
    });
};

var grep = function (pattern, flags, files, done) {
  var countdown = files.length;
  var output = [];
  var options = {
    fileNames: files.length > 1
  };
  Object.keys(FLAGS).forEach(function (key) {
    options[key] = flags.indexOf(FLAGS[key]) > -1;
  });

  files.forEach(function (file, i) {
    grepFile(pattern, options, file, function (err, match) {
      if (err) return done(err);
      output[i] = match;
      if (--countdown === 0) {
        done(null, Array.prototype.concat.apply([], output));
      }
      return null; // appease eslint
    });
  });
};

module.exports = grep;
