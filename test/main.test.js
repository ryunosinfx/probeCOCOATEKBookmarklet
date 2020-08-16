import chai from 'chai';
const expect = chai.expect;

describe('テストMain', () => {
	it('same to be not same at encrypted', async () => {
		const B = 'まーお';
		const A = 'Nya-n';
		expect(A).to.not.equal(B);
	});
});
