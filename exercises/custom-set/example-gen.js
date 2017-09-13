/**
 * README
 *
 * Generates the custom-set exercise spec from the test metadata in x-common
 *
 * Prerequisites:
 *
 *     - Node.js v6 or higher (for destructuring and template literals)
 *
 *     - x-common and xjavascript checked out into the same parent directory
 *
 *     - x-common up to date
 *
 * Run with:
 *
 *     node example-gen.js
 */

const fs = require('fs');
const path = require('path');

const EXERCISE_METADATA_ROOT = '../../../x-common/exercises';
const METADATA_FILE_NAME = 'canonical-data.json';
const METADATA_COMMENT_KEY = '#';
const EXERCISE_DIR_NAME = 'custom-set';
const SPEC_FILE_NAME = 'custom-set.spec.js';

const TEST_BODY_TEMPLATES = {
  empty({ set, expected }) {
    return (
      `var actual = new CustomSet(${array(set)}).empty();
    expect(actual).toBe(${expected});`);
  },

  contains({ set, element, expected }) {
    return (
      `var actual = new CustomSet(${array(set)}).contains(${element});
    expect(actual).toBe(${expected});`);
  },

  subset({ set1, set2, expected }) {
    return (
      `var actual = new CustomSet(${array(set2)}).subset(new CustomSet(${array(set1)}));
    expect(actual).toBe(${expected});`);
  },

  disjoint({ set1, set2, expected }) {
    return (
      `var actual = new CustomSet(${array(set1)}).disjoint(new CustomSet(${array(set2)}));
    expect(actual).toBe(${expected});`);
  },

  equal({ set1, set2, expected }) {
    return (
      `var actual = new CustomSet(${array(set1)}).eql(new CustomSet(${array(set2)}));
    expect(actual).toBe(${expected});`);
  },

  add({ set, element, expected }) {
    return (
      `var actual = new CustomSet(${array(set)}).add(${element});
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },

  intersection({ set1, set2, expected }) {
    return (
      `var actual = new CustomSet(${array(set1)}).intersection(new CustomSet(${array(set2)}));
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },

  difference({ set1, set2, expected }) {
    return (
      `var actual = new CustomSet(${array(set1)}).difference(new CustomSet(${array(set2)}));
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },

  union({ set1, set2, expected }) {
    return (
      `var actual = new CustomSet(${array(set1)}).union(new CustomSet(${array(set2)}));
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },
};

const NON_CANONICAL_TESTS = `
  xit('can be emptied', function() {
    var actual = new CustomSet([1, 2]).clear();
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
    var actual2 = new CustomSet().clear();
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('knows its size', function() {
    var actual = new CustomSet().size();
    expect(actual).toBe(0);
    var actual2 = new CustomSet([1, 2, 3]).size();
    expect(actual2).toBe(3);
    var actual3 = new CustomSet([1, 2, 3, 2]).size();
    expect(actual3).toBe(3);
  });

  xit('can give back a list', function() {
    var actual = new CustomSet().toList();
    var expected = [];
    expect(actual.sort()).toEqual(expected);
    var actual2 = new CustomSet([3, 1, 2]).toList();
    var expected2 = [1, 2, 3];
    expect(actual2.sort()).toEqual(expected2);
    var actual3 = new CustomSet([3, 1, 2, 1]).toList();
    var expected3 = [1, 2, 3];
    expect(actual3.sort()).toEqual(expected3);
  });
`;

function render({
  suiteData, testBodyTemplates, extraTests, suiteTemplate,
}) {
  const testCases = extractTestCases(suiteData, testBodyTemplates);
  const tests = renderTests(testCases);

  return renderSuite(tests, extraTests, suiteTemplate);
}

function extractTestCases(suiteData, testBodyTemplates) {
  const testCases = [];

  Object.keys(suiteData)
    .filter(key => key !== METADATA_COMMENT_KEY)
    .forEach((sectionName) => {
      suiteData[sectionName].cases
        .forEach((caseData) => {
          testCases.push(new TestCase(caseData, testBodyTemplates[sectionName]));
        });
    });

  return testCases;
}

function TestCase(caseData, bodyTemplate) {
  this.caseData = caseData;
  this.bodyTemplate = bodyTemplate;
}

TestCase.prototype.render = function (isEnabled) {
  return testTemplate(isEnabled, this.caseData.description, this.bodyTemplate(this.caseData));
};

function renderTests(testCases) {
  return testCases.reduce((output, testCase, index) => output + testCase.render(index === 0), '');
}

function renderSuite(tests, otherTests, suiteTemplate) {
  return suiteTemplate(tests.concat(otherTests));
}

function suiteTemplate(tests) {
  return (
    `var CustomSet = require('./custom-set');

describe('CustomSet', function() {
${tests}
});
`);
}

function testTemplate(isEnabled, description, body) {
  return (
    `
  ${isEnabled ? 'it' : 'xit'}('${description}', function() {
    ${body}
  });
`);
}

function array(array) {
  return array.length === 0 ? '' : `[${array.join(', ')}]`;
}

function generate() {
  const exerciseFilePath = path.join(EXERCISE_METADATA_ROOT, EXERCISE_DIR_NAME, METADATA_FILE_NAME);
  const suiteData = JSON.parse(fs.readFileSync(exerciseFilePath));

  return fs.writeFileSync(
    SPEC_FILE_NAME,
    render({
      suiteData,
      testBodyTemplates: TEST_BODY_TEMPLATES,
      extraTests: NON_CANONICAL_TESTS,
      suiteTemplate,
    }),
  );
}

generate();
