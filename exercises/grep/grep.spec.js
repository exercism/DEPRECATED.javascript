var fs = require('fs');
var grep = require('./grep');

var texts = {
  'iliad.txt': 'Achilles sing, O Goddess! Peleus\' son;\n' +
    'His wrath pernicious, who ten thousand woes\n' +
    'Caused to Achaia\'s host, sent many a soul\n' +
    'Illustrious into Ades premature,\n' +
    'And Heroes gave (so stood the will of Jove)\n' +
    'To dogs and to all ravening fowls a prey,\n' +
    'When fierce dispute had separated once\n' +
    'The noble Chief Achilles from the son\n' +
    'Of Atreus, Agamemnon, King of men.',
  'midsummer-night.txt': 'I do entreat your grace to pardon me.\n' +
    'I know not by what power I am made bold,\n' +
    'Nor how it may concern my modesty,\n' +
    'In such a presence here to plead my thoughts;\n' +
    'But I beseech your grace that I may know\n' +
    'The worst that may befall me in this case,\n' +
    'If I refuse to wed Demetrius.',
  'paradise-lost.txt': 'Of Mans First Disobedience, and the Fruit\n' +
    'Of that Forbidden Tree, whose mortal tast\n' +
    'Brought Death into the World, and all our woe,\n' +
    'With loss of Eden, till one greater Man\n' +
    'Restore us, and regain the blissful Seat,\n' +
    'Sing Heav\'nly Muse, that on the secret top\n' +
    'Of Oreb, or of Sinai, didst inspire\n' +
    'That Shepherd, who first taught the chosen Seed'
};

var writeTexts = function (done) {
  var written = 0;
  Object.keys(texts).forEach(function (filename) {
    fs.writeFile(filename, texts[filename], function (err) {
      if (err) return done.fail(err);
      if (++written === 3) done();
      return null; // eslint
    });
  });
};

var eraseTexts = function (done) {
  var erased = 0;
  Object.keys(texts).forEach(function (filename) {
    fs.unlink(filename, function (err) {
      if (err) return done.fail(err);
      if (++erased === 3) done();
      return null; // eslint
    });
  });
};

describe('Grep', function () {
  beforeAll(writeTexts);
  afterAll(eraseTexts);

  describe('Test grepping a single file', function () {
    it('One file, one match, no flags', function (done) {
      var pattern = 'Agamemnon';
      var flags = [];
      var files = ['iliad.txt'];
      var expected = ['Of Atreus, Agamemnon, King of men.'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, one match, print line numbers flag', function (done) {
      var pattern = 'Forbidden';
      var flags = ['-n'];
      var files = ['paradise-lost.txt'];
      var expected = ['2:Of that Forbidden Tree, whose mortal tast'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, one match, case-insensitive flag', function (done) {
      var pattern = 'FORBIDDEN';
      var flags = ['-i'];
      var files = ['paradise-lost.txt'];
      var expected = ['Of that Forbidden Tree, whose mortal tast'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, one match, print file names flag', function (done) {
      var pattern = 'Forbidden';
      var flags = ['-l'];
      var files = ['paradise-lost.txt'];
      var expected = ['paradise-lost.txt'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, one match, match entire lines flag', function (done) {
      var pattern = 'With loss of Eden, till one greater Man';
      var flags = ['-x'];
      var files = ['paradise-lost.txt'];
      var expected = ['With loss of Eden, till one greater Man'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, one match, multiple flags', function (done) {
      var pattern = 'OF ATREUS, Agamemnon, KIng of MEN.';
      var flags = ['-n', '-i', '-x'];
      var files = ['iliad.txt'];
      var expected = ['9:Of Atreus, Agamemnon, King of men.'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, several matches, no flags', function (done) {
      var pattern = 'may';
      var flags = [];
      var files = ['midsummer-night.txt'];
      var expected = ['Nor how it may concern my modesty,',
        'But I beseech your grace that I may know',
        'The worst that may befall me in this case,'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, several matches, print line numbers flag', function (done) {
      var pattern = 'may';
      var flags = ['-n'];
      var files = ['midsummer-night.txt'];
      var expected = ['3:Nor how it may concern my modesty,',
        '5:But I beseech your grace that I may know',
        '6:The worst that may befall me in this case,'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, several matches, match entire lines flag', function (done) {
      var pattern = 'may';
      var flags = ['-x'];
      var files = ['midsummer-night.txt'];
      var expected = [];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, several matches, case-insensitive flag', function (done) {
      var pattern = 'ACHILLES';
      var flags = ['-i'];
      var files = ['iliad.txt'];
      var expected = ['Achilles sing, O Goddess! Peleus\' son;',
        'The noble Chief Achilles from the son'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, several matches, inverted flag', function (done) {
      var pattern = 'Of';
      var flags = ['-v'];
      var files = ['paradise-lost.txt'];
      var expected = ['Brought Death into the World, and all our woe,',
        'With loss of Eden, till one greater Man',
        'Restore us, and regain the blissful Seat,',
        'Sing Heav\'nly Muse, that on the secret top',
        'That Shepherd, who first taught the chosen Seed'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, no matches, various flags', function (done) {
      var pattern = 'Gandalf';
      var flags = ['-n', '-l', '-x', '-i'];
      var files = ['iliad.txt'];
      var expected = [];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('One file, no matches, file does not exist', function (done) {
      var pattern = 'Gandalf';
      var flags = [];
      var files = ['the-return-of-the-king.txt'];

      expect(function () {
        grep(pattern, flags, files, function (err, found) {
          expect(err).not.toBeNull();
          expect(found).toBeUndefined();
          done();
        });
      }).not.toThrow();
    });

    xit('One file, several matches, callback is only called once', function (done) {
      var pattern = 'so';
      var flags = [];
      var files = ['iliad.txt'];
      var spyable = {callback: function (err) {
        expect(err).toBeNull();
        expect(spyable.callback).toHaveBeenCalledTimes(1);
        done();
      }};

      spyOn(spyable, 'callback').and.callThrough();
      grep(pattern, flags, files, spyable.callback);
    });
  });

  describe('Test grepping multiples files at once', function () {
    xit('Multiple files, one match, no flags', function (done) {
      var pattern = 'Agamemnon';
      var flags = [];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['iliad.txt:Of Atreus, Agamemnon, King of men.'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, several matches, no flags', function (done) {
      var pattern = 'may';
      var flags = [];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['midsummer-night.txt:Nor how it may concern my modesty,',
        'midsummer-night.txt:But I beseech your grace that I may know',
        'midsummer-night.txt:The worst that may befall me in this case,'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, several matches, print line numbers flag', function (done) {
      var pattern = 'that';
      var flags = ['-n'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['midsummer-night.txt:5:But I beseech your grace that I may know',
        'midsummer-night.txt:6:The worst that may befall me in this case,',
        'paradise-lost.txt:2:Of that Forbidden Tree, whose mortal tast',
        'paradise-lost.txt:6:Sing Heav\'nly Muse, that on the secret top'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, one match, print file names flag', function (done) {
      var pattern = 'who';
      var flags = ['-l'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['iliad.txt', 'paradise-lost.txt'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, several matches, case-insensitive flag', function (done) {
      var pattern = 'TO';
      var flags = ['-i'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['iliad.txt:Caused to Achaia\'s host, sent many a soul',
        'iliad.txt:Illustrious into Ades premature,',
        'iliad.txt:And Heroes gave (so stood the will of Jove)',
        'iliad.txt:To dogs and to all ravening fowls a prey,',
        'midsummer-night.txt:I do entreat your grace to pardon me.',
        'midsummer-night.txt:In such a presence here to plead my thoughts;',
        'midsummer-night.txt:If I refuse to wed Demetrius.',
        'paradise-lost.txt:Brought Death into the World, and all our woe,',
        'paradise-lost.txt:Restore us, and regain the blissful Seat,',
        'paradise-lost.txt:Sing Heav\'nly Muse, that on the secret top'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, several matches, inverted flag', function (done) {
      var pattern = 'a';
      var flags = ['-v'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['iliad.txt:Achilles sing, O Goddess! Peleus\' son;',
        'iliad.txt:The noble Chief Achilles from the son',
        'midsummer-night.txt:If I refuse to wed Demetrius.'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, one match, match entire lines flag', function (done) {
      var pattern = 'But I beseech your grace that I may know';
      var flags = ['-x'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['midsummer-night.txt:But I beseech your grace that I may know'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, one match, multiple flags', function (done) {
      var pattern = 'WITH LOSS OF EDEN, TILL ONE GREATER MAN';
      var flags = ['-n', '-i', '-x'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = ['paradise-lost.txt:4:With loss of Eden, till one greater Man'];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, no matches, various flags', function (done) {
      var pattern = 'Frodo';
      var flags = ['-n', '-l', '-x', '-i'];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var expected = [];

      grep(pattern, flags, files, function (err, found) {
        expect(err).toBeNull();
        expect(found).toEqual(expected);
        done();
      });
    });

    xit('Multiple files, no matches, one file does not exist', function (done) {
      var pattern = 'Frodo';
      var flags = [];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt', 'the-return-of-the-king.txt'];

      expect(function () {
        grep(pattern, flags, files, function (err, found) {
          expect(err).not.toBeNull();
          expect(found).toBeUndefined();
          done();
        });
      }).not.toThrow();
    });

    xit('Multiple files, several matches, callback is only called once', function (done) {
      var pattern = 'so';
      var flags = [];
      var files = ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'];
      var spyable = {callback: function (err) {
        expect(err).toBeNull();
        expect(spyable.callback).toHaveBeenCalledTimes(1);
        done();
      }};

      spyOn(spyable, 'callback').and.callThrough();
      grep(pattern, flags, files, spyable.callback);
    });
  });
});
