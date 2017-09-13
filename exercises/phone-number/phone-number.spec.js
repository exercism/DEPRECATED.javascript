const PhoneNumber = require('./phone-number');

describe('PhoneNumber()', () => {
  it('cleans the number', () => {
    const phone = new PhoneNumber('(223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('cleans numbers with dots', () => {
    const phone = new PhoneNumber('223.456.7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('cleans numbers with multiple spaces', () => {
    const phone = new PhoneNumber('223 456   7890   ');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('invalid when 9 digits', () => {
    const phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid when 11 digits does not start with a 1', () => {
    const phone = new PhoneNumber('22234567890');
    expect(phone.number()).toEqual(null);
  });

  xit('valid when 11 digits and starting with 1', () => {
    const phone = new PhoneNumber('12234567890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('valid when 11 digits and starting with 1 even with punctuation', () => {
    const phone = new PhoneNumber('+1 (223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('invalid when more than 11 digits', () => {
    const phone = new PhoneNumber('321234567890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid with letters', () => {
    const phone = new PhoneNumber('123-abc-7890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid with punctuations', () => {
    const phone = new PhoneNumber('123-@:!-7890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid if area code does not start with 2-9', () => {
    const phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid if exchange code does not start with 2-9', () => {
    const phone = new PhoneNumber('(223) 056-7890');
    expect(phone.number()).toEqual(null);
  });
});
