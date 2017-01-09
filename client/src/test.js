var assert=require('assert');

describe('Arrays',function()
{
	it('Array.slice is immutable',function(){
		const arr1=[0,1,2,3,4];
		const arr2=arr1.slice(3);
		assert.equal(arr2.length,2);
	});
});

describe('Strings',function(){
	it('Compare strings',function(){
		const a = 'a';
		const b = 'b';
		assert.ok(a < b);
	});
});

describe('Strings',function(){
	it('unshift arrays',function(){
		const a = [1, 2, 3];
		const b=a.unshift(4, 5);
		assert.equal(b.length,5); // [4, 5, 1, 2, 3]
	});
});
