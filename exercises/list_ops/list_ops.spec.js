var ListOps = require('./list_ops');

describe('ListOps', function () {

  it('lengthOfAnEmptyListShouldBeZero', function () {
  var list = new ListOps();
  var expected = 0;
  var actual = list.length("")
  assert.deepEqual(expected,actual);
  });

  xit('shouldReturnTheCorrectLengthOfAnNonEmptyList', function () {
   var listeInt = new Array(0,1,2,3,4);
   var list = new ListOps();
   var actual = list.length(listeInt)
   var expected = listeInt.size() ;
   assert.deepEqual(expected,actual);
  });

  xit('shouldReverseAnEmptyList', function () {
   var list = new ListOps();
   var actual = list.reverse("");

   assert.notEqual(actual, null);
   assert.isTrue(actual == "");
  });

  xit('shouldReverseANonEmptyList', function () {
   var listeInt = new Array(0,1,2,3,4,5,6,7,8);
   var actual = list.reverse(listeInt);
   var expected = new Array(8,6,7,5,4,3,2,1,0);
   assert.notEqual(actual, null);
   assert.isFalse(actual == "");
   assert.deepEqual(expected,actual);
  });
/*
  xit('shouldMapAnEmptyListAndReturnAnEmptyList', function () {
   var list = new ListOps();
   // manque un code

   assert.notEqual(actual,null);
   assert.isTrue(actual == "");
  });

  xit('shouldMapNonEmptyList', function () {
   var list = new ListOps();
   var listeInt = new Array(1,3,5,7);
   var listResult = new Array(2,4,6,8);
   //manque un code

   assert.notEqual(actual,null);
   assert.isFalse(actual == "");
   assert.deepEqual(listResult,actual);
  });

  xit('shouldFilterAnEmptyListanddReturnAnEmptyList', function () {
   var list = new ListOps();
   //manque un code

   assert.notEqual(actual,null);
   assert.isTrue(actual == "");
  });


  xit('shouldFilterNonEmptyList', function () {
   var listInt =
   //manque un code

   assert.notEqual(actual,null);
   assert.isTrue(actual == "");
  });
*/

  xit('shouldConcatenateZeroLists', function () {
   var list = new ListOps();
   var actual = list.concat();
   assert.notEqual(actual,null);
   assert.isTrue(actual == "");
  });

  xit('shouldConcatenateOneNonEmptyList', function () {
   var listInt = new Array(0,1,2,3,4);
   var list = new ListOps();
   var actual = list.concat(listInt);
   var expected = new Array(0,1,2,3,4);
   assert.notEqual(actual,null);
   assert.isFalse(actual == "");
   assert.deepEqual(expected,actual);
  });

  xit('shouldConcatenateOneEmptyList', function () {
   var list = new ListOps();
   var actual = list.concat(listInt);
   assert.notEqual(actual,null);
   assert.isTrue(actual == "");
  });

  xit('shouldConcatenateTwoEmptyLists', function () {
   var emptyListe = new Array();
   var list = new ListOps();
   var actual = list.concat(emptyListe,emptyListe);
   assert.notEqual(actual,null);
   assert.isTrue(actual == "");
  });

  xit('shouldConcatenateOneEmptyAndOneNonEmptyLists', function () {
   var listInt = new Array(0,1,2,3,4);
   var emptyListe = new Array();
   var list = new ListOps();
   var actual = list.concat(listInt,emptyListe);
   var expected = new Array(0,1,2,3,4);
   assert.notEqual(actual,null);
   assert.isFalse(actual == "");
   assert.deepEqual(expected,actual);
  });

  xit('shouldConcatenateOneNonEmptyAndOneEmptyLists', function () {
   var listInt = new Array(0,1,2,3,4);
   var emptyListe = new Array();
   var list = new ListOps();
   var actual = list.concat(emptyListe,listInt);
   var expected = new Array(0,1,2,3,4);
   assert.notEqual(actual,null);
   assert.isFalse(actual == "");
   assert.deepEqual(expected,actual);
  });

  xit('shouldConcatenateTwoListsWithSameElements', function () {
   var listInt1 = new Array(0,1,2,3,4);
   var listInt2 = new Array(1,2,3,4,5,6);
   var expected = new Array(0,1,2,3,4,1,2,3,4,5,6);
   var list = new ListOps();
   var actual = list.concat(listInt1,listInt2);
   assert.notEqual(actual,null);
   assert.isFalse(actual == "");
   assert.deepEqual(expected,actual);
  });

  xit('shouldConcatenateSeveralLists', function () {
   var listInt1 = new Array(0,1,2,3);
   var listInt2 = new Array(4,5,6,7);
   var listInt3 = new Array(8,9,10,11);
   var listInt4 = new Array(12,13,14,15);
   var expected = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
   var emptyListe = new Array();
   var list = new ListOps();
   var actual = list.concat(listInt1,listInt2,emptyListe,listInt3,listInt4);
   assert.notEqual(actual,null);
   assert.isFalse(actual == "");
   assert.deepEqual(expected,actual);
  });

  xit('shouldReturnIdentityWhenAnEmptyListIsReduced', function () {
   var expected = 0;
   var emptyListe = new Array();
   var list = new ListOps();
  // var actual = list.reduce(emptyListe,0,);

   //assert.deepEqual(expected,actual);
  });

  xit('shouldCalculateTheSumOfANonEmptyIntegerList', function () {
   var listInt = new Array(0,1,2,3,4);
   var list = new ListOps();
   // var actual = list.reduce(listInt,0,);
   //assert.deepEqual(10,actual);
  });

});
