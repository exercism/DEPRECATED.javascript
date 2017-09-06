var Pangram = require('./pangram');

describe('Tests the Pangram checker.', function()  {

  it('can handle an empty sentence', function() {
    var pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

  xit('handles an undefined message as empty message', function() {
    var pangram = new Pangram();
    expect(pangram.isPangram()).toBe(false);
  });

  xit('recognizes a lower case pangram', function()  {
    var pangram = new Pangram('thequickbrownfoxjumpsoverthelazydog');
    expect(pangram.isPangram()).toBe(true);
  });

  xit('recognizes a missing character', function()  {
    // missing 'x'
    var pangram = new Pangram('aquickmovementoftheenemywilljeopardizefivegunboats');
    expect(pangram.isPangram()).toBe(false);
    // missing 'h'
    var pangram = new Pangram('fiveboxingwizardsjumpquicklyatit');
    expect(pangram.isPangram()).toBe(false);
  });

  xit('recognizes an upper case pangram', function()  {
    var pangram = new Pangram('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG');
    expect(pangram.isPangram()).toBe(true);
    // missing 'G'
    var pangram = new Pangram('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOLL');
    expect(pangram.isPangram()).toBe(false);
  });

  xit('recognizes a mixed case pangram', function()  {
    var pangram = new Pangram('ThEFiVebOxInGWiZaRdSJuMpqUiCkLy');
    expect(pangram.isPangram()).toBe(true);
    // missing 'y'
    var pangram = new Pangram('ThEFiVebOxInGWiZaRdSJuMpqUiCkL');
    expect(pangram.isPangram()).toBe(false);
  });

  xit('ignores other characters', function() {
    var pangram = new Pangram('Victor_jagt-zwölf.B0xkämpfer >qu3r< über; den \'großen" Sylter#Deich!');
    expect(pangram.isPangram()).toBe(true);
    // missing 'd'
    var pangram = new Pangram('Victor_jagt-zwölf.B0xkämpfer >qu3r< über; einen \'großen" Sylter#Teich!');
    expect(pangram.isPangram()).toBe(false);
  });

  xit('ignores non-ANSI characters', function()  {
    var pangram = new Pangram('Few quips galvanized the ① mock 😮 jury box 🗃️.');
    expect(pangram.isPangram()).toBe(true);
    // substituted 'v' with '℣'
    var pangram = new Pangram('Few quips gal℣anized the ① mock 😮 jury box 🗃️.');
    expect(pangram.isPangram()).toBe(false);
  });

});
