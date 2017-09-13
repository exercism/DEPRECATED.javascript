

const defaultChildren = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const plants = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

function getPlants(pots, index) {
  const plants = [];
  const position = 2 * index;
  plants.push(pots[0][position]);
  plants.push(pots[0][position + 1]);
  plants.push(pots[1][position]);
  plants.push(pots[1][position + 1]);
  return plants;
}

function parse(diagram) {
  return diagram.split('\n').map(row => row.split('').map(sign => plants[sign]));
}

function Garden(diagram, students) {
  const instance = {};
  students = students || defaultChildren;
  students.sort();

  students.forEach((student, index) => {
    instance[student.toLowerCase()] = getPlants(parse(diagram), index);
  });

  return instance;
}

module.exports = Garden;
