const pigLatin = require('./pig-latin');

describe('pigLatin', () => {
  it('translates a word beginning with a', () => {
    expect(pigLatin.translate('apple')).toEqual('appleay');
  });

  xit('translates a word beginning with e', () => {
    expect(pigLatin.translate('ear')).toEqual('earay');
  });

  xit('translates a word beginning with p', () => {
    expect(pigLatin.translate('pig')).toEqual('igpay');
  });

  xit('translates a word beginning with k', () => {
    expect(pigLatin.translate('koala')).toEqual('oalakay');
  });

  xit('translates a word beginning with ch', () => {
    expect(pigLatin.translate('chair')).toEqual('airchay');
  });

  xit('translates a word beginning with qu', () => {
    expect(pigLatin.translate('queen')).toEqual('eenquay');
  });

  xit('translates a word with a consonant preceding qu', () => {
    expect(pigLatin.translate('square')).toEqual('aresquay');
  });

  xit('translates a word beginning with th', () => {
    expect(pigLatin.translate('therapy')).toEqual('erapythay');
  });

  xit('translates a word beginning with thr', () => {
    expect(pigLatin.translate('thrush')).toEqual('ushthray');
  });

  xit('translates a word beginning with sch', () => {
    expect(pigLatin.translate('school')).toEqual('oolschay');
  });

  xit('translates a phrase', () => {
    expect(pigLatin.translate('quick fast run'))
      .toEqual('ickquay astfay unray');
  });
});
