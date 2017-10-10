var transpose = require('./transpose');

describe('Transpose', function () {
  it('test empty string', function () {
    expect(transpose('')).toEqual('');
  });

  xit('test two characters in a row', function () {
    var input = 'A1';
    var expected = 'A\n1';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test two characters in a column', function () {
    var input = 'A\n1';
    var expected = 'A1';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test simple', function () {
    var input = 'ABC\n123';
    var expected = 'A1\nB2\nC3';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test single line', function () {
    var input = 'Single line.';
    var expected = 'S\ni\nn\ng\nl\ne\n \nl\ni\nn\ne\n.';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test first line longer than second line', function () {
    var input = 'The fourth line.\nThe fifth line.';
    var expected = 'TT\nhh\nee\n  \nff\noi\nuf\nrt\nth\nh \n l\nli\nin\nne\ne.\n.';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test second line longer than first line', function () {
    var input = 'The first line.\nThe second line.';
    var expected = 'TT\nhh\nee\n  \nfs\nie\nrc\nso\ntn\n d\nl \nil\nni\nen\n.e\n .';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test square', function () {
    var input =  'HEART\nEMBER\nABUSE\nRESIN\nTREND';
    var expected = 'HEART\nEMBER\nABUSE\nRESIN\nTREND';
    expect(transpose(input)).toEqual(expected);
  });

  xit('test rectangle', function () {
    var input = 'FRACTURE\nOUTLINED\nBLOOMING\nSEPTETTE';
    var expected = 'FOBS\nRULE\nATOP\nCLOT\nTIME\nUNIT\nRENT\nEDGE';
    expect(transpose(input)).toEqual(expected);
  });
  xit('test triangle', function () {
    var input = 'T\nEE\nAAA\nSSSS\nEEEEE\nRRRRRR';
    var expected = 'TEASER\n EASER\n  ASER\n   SER\n    ER\n     R';
    expect(transpose(input)).toEqual(expected);
  });
  xit('test many lines', function () {
    var input = 'Chor. Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross\'d lovers take their life;\nWhose misadventur\'d piteous overthrows\nDoth with their death bury their parents\' strife.\nThe fearful passage of their death-mark\'d love,\nAnd the continuance of their parents\' rage,\nWhich, but their children\'s end, naught could remove,\nIs now the two hours\' traffic of our stage;\nThe which if you with patient ears attend,\nWhat here shall miss, our toil shall strive to mend.';
    var expected = "CIFWFAWDTAWITW\nhnrhr hohnhshh\no oeopotedi ea\nrfmrmash  cn t\n.a e ie fthow \n ia fr weh,whh\nTrnco miae  ie\nw ciroitr btcr\noVivtfshfcuhhe\n eeih a uote  \nhrnl sdtln  is\noot ttvh tttfh\nun bhaeepihw a\nsaglernianeoyl\ne,ro -trsui ol\nh uofcu sarhu \nowddarrdan o m\nlhg to'egccuwi\ndeemasdaeehris\nsr als t  ists\n,ebk 'phool'h,\n  reldi ffd   \nbweso tb  rtpo\noea ileutterau\nt kcnoorhhnatr\nhl isvuyee'fi \n atv es iisfet\nayoior trr ino\nl  lfsoh  ecti\nion   vedpn  l\nkuehtteieadoe \nerwaharrar,fas\n   nekt te  rh\nismdsehphnnosa\nncuse ra-tau l\n et  tormsural\ndniuthwea'g t \niennwesnr hsts\ng,ycoitkrttet\nn,l rs'a anr\nief 'dgcgdi\ntaol  eoe,v\nyneisl,u;e\n,.sftol \n     ervdt\n     ;ie o\n       f,r \n       eem\n       .me\n          on\n          vd\n          e.\n          ,";
    expect(transpose(input)).toEqual(expected);
  });
});
