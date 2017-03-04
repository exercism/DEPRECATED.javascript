var PhoneNumber = require('./phone-number');

describe('PhoneNumber()', function() {
  it('cleans the number (123) 456-7890', function() {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  xit('cleans numbers with dots', function() {
    var phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  xit('cleans some other number with dots', function() {
    var phone = new PhoneNumber('555.456.7890');
    expect(phone.number()).toEqual('5554567890');
  });

  xit('valid when 11 digits and first digit is 1', function() {
    var phone = new PhoneNumber('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  xit('invalid when 11 digits and the first digit is NOT 1', function() {
    var phone = new PhoneNumber('2  1234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  xit('invalid when 12 digits', function() {
    var phone = new PhoneNumber('991234567890');
    expect(phone.number()).toEqual('0000000000');
  });

  xit('invalid when 9 digits', function() {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual('0000000000');
  });

  xit('has an area code', function() {
    var phone = new PhoneNumber('1234567890');
    expect(phone.areaCode()).toEqual('123');
  });

  xit('has some other area code', function() {
    var phone = new PhoneNumber('5554567890');
    expect(phone.areaCode()).toEqual('555');
  });

  xit('formats a number', function() {
    var phone = new PhoneNumber('1234567890');
    expect(phone.toString()).toEqual('(123) 456-7890');
  });

  xit('formats some other number', function() {
    var phone = new PhoneNumber('5554567890');
    expect(phone.toString()).toEqual('(555) 456-7890');
  });
});
