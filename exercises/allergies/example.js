

function Allergies(allergenIndex) {
  this.allergenIndex = allergenIndex;
}

Allergies.possibleAllergies = ['eggs', 'peanuts', 'shellfish', 'strawberries',
  'tomatoes', 'chocolate', 'pollen', 'cats'];

Allergies.prototype = {
  list() {
    const possibleAllergies = Allergies.possibleAllergies;

    const allergicTo = [];

    for (let i = 0; i < possibleAllergies.length; i++) {
      const allergy = possibleAllergies[i];
      if (this.allergenIndex & Math.pow(2, i)) {
        allergicTo.push(allergy);
      }
    }
    return allergicTo;
  },
  allergicTo(food) {
    let isAllergic = false;

    const allergyList = this.list();
    for (let i = 0; i < allergyList.length; i++) {
      if (allergyList[i] === food) {
        isAllergic = true;
        break;
      }
    }

    return isAllergic;
  },
};

module.exports = Allergies;
