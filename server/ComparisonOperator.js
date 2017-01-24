var assert = require('assert');
describe('ComparisonOperator',function(){
const a=2;
const b='2';
it('Equal functions like ==',function(){
assert.equal(a,b);
});
it('strictEqual functions as ===',function(){
assert.strictEqual(a,b);
});
});