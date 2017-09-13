const Words = require('./word-count');

describe('count()', () => {
  const words = new Words();

  it('counts one word', () => {
    const expectedCounts = { word: 1 };
    expect(words.count('word')).toEqual(expectedCounts);
  });

  xit('counts one of each word', () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words.count('one of each')).toEqual(expectedCounts);
  });

  xit('counts multiple occurrences of a word', () => {
    const expectedCounts = {
      one: 1, fish: 4, two: 1, red: 1, blue: 1,
    };
    expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  xit('handles cramped lists', () => {
    const expectedCounts = { one: 1, two: 1, three: 1 };
    expect(words.count('one,two,three')).toEqual(expectedCounts);
  });

  xit('ignores punctuation', () => {
    const expectedCounts = {
      car: 1, carpet: 1, as: 1, java: 1, javascript: 1,
    };
    expect(words.count('car : carpet as java: javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  xit('includes numbers', () => {
    const expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(words.count('testing 1 2 testing')).toEqual(expectedCounts);
  });

  xit('normalizes to lowercase', () => {
    const expectedCounts = { go: 3 };
    expect(words.count('go Go GO')).toEqual(expectedCounts);
  });

  xit('counts words with apostrophes', () => {
    const expectedCounts = {
      first: 1, 'don\'t': 2, laugh: 1, then: 1, cry: 1,
    };
    expect(words.count('First: don\'t laugh. Then: don\'t cry.')).toEqual(expectedCounts);
  });

  xit('counts words with quotations', () => {
    const expectedCounts = {
      joe: 1, 'can\'t': 1, tell: 1, between: 1, large: 2, and: 1,
    };
    expect(words.count('Joe can\'t tell between \'large\' and large.')).toEqual(expectedCounts);
  });

  xit('counts properly international characters', () => {
    const expectedCounts = {
      hola: 1, qué: 1, tal: 1, привет: 1,
    };
    expect(words.count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  xit('counts multiline', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\nworld')).toEqual(expectedCounts);
  });

  xit('counts tabs as white space', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\tworld')).toEqual(expectedCounts);
  });

  xit('counts multiple spaces as one', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello  world')).toEqual(expectedCounts);
  });

  xit('does not count leading or trailing whitespace', () => {
    const expectedCounts = { introductory: 1, course: 1 };
    expect(words.count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  xit('handles properties that exist on Object’s prototype', () => {
    const expectedCounts = {
      reserved: 1, words: 1, like: 1, constructor: 1, and: 1, tostring: 1, ok: 1,
    };
    expect(words.count('reserved words like constructor and toString ok?')).toEqual(expectedCounts);
  });
});
