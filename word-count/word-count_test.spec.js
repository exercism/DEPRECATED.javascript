var words = require('./word-count');

describe("words()", function() {
  it("counts one word", function() {
    var expectedCounts = { word: 1 };
    expect(words("word")).toEqual(expectedCounts);
  });

  it("counts one of each", function() {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words("one of each")).toEqual(expectedCounts);
  });

  it("counts multiple occurrences", function() {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words("one fish two fish red fish blue fish")).toEqual(expectedCounts);
  });

  it("includes punctuation", function() {
    var expectedCounts = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
    expect(words("car : carpet as java : javascript!!&@$%^&")).toEqual(expectedCounts);
  });

  it("includes numbers", function() {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(words("testing 1 2 testing")).toEqual(expectedCounts);
  });

  it("respects case", function() {
    var expectedCounts = { go: 1, Go:1, GO:1 };
    expect(words("go Go GO")).toEqual(expectedCounts);
  });

  it("counts properly international characters", function() {
    var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
    expect(words("¡Hola! ¿Qué tal? Привет!")).toEqual(expectedCounts);
  });

  it("counts multiline", function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(words("hello\nworld")).toEqual(expectedCounts);
  });
});
