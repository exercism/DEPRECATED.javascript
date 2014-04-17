var anagram = require('./anagram');

describe('Anagram', function() {

  it("no matches",function() {
    var subject = anagram("diaper");
    var matches = subject.matches([ "hello", "world", "zombies", "pants"]);

    expect(matches).toEqual([]);
  });

  it("detects simple anagram",function() {
    var subject = anagram("ant");
    var matches = subject.matches(['tan', 'stand', 'at']);

    expect(matches).toEqual(['tan']);
  });

  it("does not detect false positives",function() {
    var subject = anagram("galea");
    var matches = subject.matches(["eagle"]);

    expect(matches).toEqual([]);
  });

  it("detects multiple anagrams",function() {
    var subject = anagram("master");
    var matches = subject.matches(['stream', 'pigeon', 'maters']);

    expect(matches).toEqual(['stream', 'maters']);
  });

  it("does not detect anagram subsets",function() {
    var subject = anagram("good");
    var matches = subject.matches(['dog', 'goody']);

    expect(matches).toEqual([]);
  });

  it("detects anagram",function() {
    var subject = anagram("listen");
    var matches = subject.matches(['enlists', 'google', 'inlets', 'banana']);

    expect(matches).toEqual(['inlets']);
  });

  it("detects multiple anagrams",function() {
    var subject = anagram("allergy");
    var matches = subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

    expect(matches).toEqual(['gallery', 'regally', 'largely']);
  });

  it("detects anagrams case-insensitively",function() {
    var subject = anagram("Orchestra");
    var matches = subject.matches(['cashregister', 'Carthorse', 'radishes']);

    expect(matches).toEqual(['Carthorse']);
  });

  it("does not detect a word as its own anagram",function() {
    var subject = anagram("banana");
    var matches = subject.matches(['Banana']);

    expect(matches).toEqual([]);
  });

  it("matches() accepts string arguments",function() {
    var subject = anagram("ant");
    var matches = subject.matches("stand", "tan", "at");

    expect(matches).toEqual(["tan"]);
  });

});
