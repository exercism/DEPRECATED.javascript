var Gigasecond = require('./gigasecond');

describe("Gigasecond", function() {

  it("test 1", function() {
    var gs = new Gigasecond(new Date(Date.UTC(2011, 3, 25)));
    var expectedDate = new Date(Date.UTC(2043, 0, 1, 1, 46, 40));
    expect(gs.date()).toEqual(expectedDate);
  });

  xit("test 2", function() {
    var gs = new Gigasecond(new Date(Date.UTC(1977, 5, 13)));
    var expectedDate = new Date(Date.UTC(2009, 1, 19, 1, 46, 40));
    expect(gs.date()).toEqual(expectedDate);
  });

  xit("test 3", function() {
    var gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19)));
    var expectedDate = new Date(Date.UTC(1991, 2, 27, 1, 46, 40));
    expect(gs.date()).toEqual(expectedDate);
  });

});
