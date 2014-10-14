var Robot = require('./robot-name');

describe("Robot", function() {
  it("has a name", function() {
    var robot = new Robot();
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  it("name is the same each time", function() {
    var robot = new Robot();
    expect(robot.name).toEqual(robot.name);
  });

  it("different robots have different names", function() {
    var robotOne = new Robot();
    var robotTwo = new Robot();
    expect(robotOne.name).not.toEqual(robotTwo.name);
  });

  it("is able to reset the name", function() {
    var robot = new Robot();
    var originalName = robot.name;
    robot.reset();
    var newName = robot.name;
    expect(originalName).not.toEqual(newName);
  });
});
