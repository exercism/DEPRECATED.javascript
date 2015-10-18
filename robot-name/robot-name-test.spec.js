var Robot = require('./robot-name');

describe('Robot', function() {
  // NOTE: The 'beforeEach()' and 'afterEach()' act as setup/teardown for this
  // test suite. See more: http://jasmine.github.io/2.0/introduction.html
  var robot;

  beforeEach(function() {
    robot = new Robot();
  });

  afterEach(function() {
    robot = null;
  });

  it('has a name', function() {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  xit('name is the same each time', function() {
    expect(robot.name).toEqual(robot.name);
  });

  xit('different robots have different names', function() {
    var i,
        numRobots = 10000,
        usedNames = {};

    for (i = 0; i < numRobots; i++) {
      var newRobot = new Robot();
      usedNames[newRobot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(numRobots);
  });

  xit('is able to reset the name', function() {
    var originalName = robot.name;
    robot.reset();
    var newName = robot.name;
    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });

  xit('should set a unique name after reset', function() {
    var i,
        numResets = 10000,
        usedNames = {};

    usedNames[robot.name] = true;

    for (i = 0; i < numResets; i++) {
      robot.reset();
      usedNames[robot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(numResets + 1);
  });
});
