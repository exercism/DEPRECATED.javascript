describe("BracketPush()", function() {
  it("checks for appropriate bracketing in a set of brackets", function() {
    expect(BracketPush("{}")).toEqual("true");
  });
});
describe("BracketPush()", function() {
  it("returns false for unclosed brackets", function() {
    expect(BracketPush("{{")).toEqual("false");
  });
});
describe("BracketPush()", function() {
  it("can check bracketing in more than one pair of brackets", function() {
    expect(BracketPush("{}[]")).toEqual("true");
  });
});
describe("BracketPush()", function() {
  it("can check bracketing in nested brackets", function() {
    expect(BracketPush("{[]}")).toEqual("true");
  });
});
describe("BracketPush()", function() {
  it("checks bracket closure with deeper nesting", function() {
    expect(BracketPush("{[)][]}")).toEqual("false");
  });
});
describe("BracketPush()", function() {
  it("checks bracket closure in a long string of brackets", function() {
    expect(BracketPush("{[]([()])}")).toEqual("true");
  });
});