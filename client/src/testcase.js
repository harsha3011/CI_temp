const assert=require("assert");
describe('arrays', function(){
	it('array.slice is immutable',function(){
		const arr1=[0,1,2,3,4]
		const arr2=arr1.slice(3);
	  assert.equal(arr2.length,5);
	});
});