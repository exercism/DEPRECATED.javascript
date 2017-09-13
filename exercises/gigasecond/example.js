function Gigasecond(dateOfBirth) {
  this.dateOfBirth = dateOfBirth;

  this.date = function () {
    const gigasecondDate = new Date(this.dateOfBirth.getTime() + 1000000000000);
    return gigasecondDate;
  };
}

module.exports = Gigasecond;
