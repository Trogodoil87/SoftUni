let { expect } = require('chai');
let { isOddOrEven } = require('./2-Even-Or-Odd');

describe('Tests length of string', () => {
    it('returns even', () => {
        expect(isOddOrEven('abv')).to.equal('odd');
    });

    it('returns even', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    });

    it('returns undefined', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    })
});