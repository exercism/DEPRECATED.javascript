var Flattener = require("./flatten-array.js");

describe("FlattenArray", function() {
	var flattener = new Flattener();
    it('flattens a nested list', function(){
		expect(flattener.flatten([[]])).toEqual([]);
	});

    xit('flattens a nested list', function(){
		expect(flattener.flatten([1,[2,3,4],5])).toEqual([1, 2, 3, 4, 5]);
	});

    xit('flattens a nested list', function(){
		expect(flattener.flatten([1,[2,3,4],5,[6,[7,8]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
	});
	xit('flattens Array with null and numbers', function(){
		expect(flattener.flatten([0, 2, [[2, 3], 8, 100, 4,[[[50]]]], -2])).toEqual([0, 2, 2, 3, 8, 100, 4, 50, -2]);
	});
    
    xit('flattens Array with just numbers', function(){
		expect(flattener.flatten([1,[2,3,[4,[[5]]],6,7],8])).toEqual([1,2,3,4,5,6,7,8]);
	});
	
	

});