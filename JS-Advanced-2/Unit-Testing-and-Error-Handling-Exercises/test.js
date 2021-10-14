let { expect } = require('chai');
let { lookupChar } = require('./3-Char-Lookup');

describe('Retrive char at given index', () => {
    it('returns undefined for first parameter not a string', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    });

    it('returns undefined for second parameter not a number', () => {
        expect(lookupChar('avb', 'a')).to.be.undefined;
    });

    it('returns undefined for first parameter not a string and second parameter not a number', () => {
        expect(lookupChar(1, 'a')).to.be.undefined;
    });

    it('returns undefined for empty string', () => {
        expect(lookupChar('', 'a')).to.be.undefined;
    });

    it('Correct Index', () => {
        expect(lookupChar('abc', 0)).to.equal('a');
    });

    it('Incorrect Index', () => {
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');
    })

    it('Incorrect Index', () => {
        expect(lookupChar('abc', 4)).to.equal('Incorrect index');
    });

    it('returns undefined for empty first and second parameter str', () => {
        expect(lookupChar('','')).to.be.undefined;
    }) 
});