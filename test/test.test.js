// var add = require('../src/add.js');
// var chai = import 'chai';
// var expect = chai.expect;
 
describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1,1)).to.equal(2);
    });
});

describe('测试异步', () => {
	it('2秒后2等于3',(done) => {
		asyn((b) => {
			expect(b).to.be.equal(3);
			done();
		})

	})
})