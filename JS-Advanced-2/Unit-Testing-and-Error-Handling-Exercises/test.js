let { expect } = require('chai');
let mathEnforcer = require('./4-Math-Enforcer');

describe('Math operations', () => {

    describe('addFive', () => {

        it('returns undefined for invlaid parameter', () => {
            expect(mathEnforcer.addFive('')).to.be.undefined;
        });

        it('returns added positive integer + 5', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });

        it('returns added negative integer + 5', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });

        it('returns added positive float + 5', () => {
            expect(mathEnforcer.addFive(2.5)).to.equal(7.5);
        });

        it('returns added negative float + 5', () => {
            expect(mathEnforcer.addFive(-4.5)).to.equal(0.5);
        });
    });

    describe('subtractTen', () => {

        it('returns undefined for invlaid parameter', () => {
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
        });

        it('returns subtracted positive integer - 10', () => {
            expect(mathEnforcer.subtractTen(100)).to.equal(90);
        });

        it('returns subtracted negative integer - 10', () => {
            expect(mathEnforcer.subtractTen(-11)).to.equal(-21);
        });

        it('returns subtracted positive float - 10', () => {
            expect(mathEnforcer.subtractTen(100.5)).to.equal(90.5);
        });

        it('returns subtracted negative float - 10', () => {
            expect(mathEnforcer.subtractTen(-100.5)).to.equal(-110.5);
        });
    });

    describe('sum', () => {

        it('returns undefined for invlaid parameter', () => {
            expect(mathEnforcer.sum('', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '')).to.be.undefined;
            expect(mathEnforcer.sum('', '')).to.be.undefined;
        });
    
        it('returns sum of two positive integers', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
    
        it('returns sum of two negative integers', () => {
            expect(mathEnforcer.sum(-1, -3)).to.equal(-4);
        });
    
        it('returns sum of one positive integer and one negative integer', () => {
            expect(mathEnforcer.sum(-1, 2)).to.equal(1);
            expect(mathEnforcer.sum(2, -1)).to.equal(1);
        });
    
        it('returns sum of two positive float numbers', () => {
            expect(mathEnforcer.sum(1.5, 1.5)).to.equal(3);
        });
    
        it('returns sum of two negative float numbers', () => {
            expect(mathEnforcer.sum(-1.5, -1.5)).to.equal(-3);
        });
    
        it('returns sum of one positive float and one negative float', () => {
            expect(mathEnforcer.sum(-1.5, 1.6)).to.be.within(0.1, 0.2);
            expect(mathEnforcer.sum(1.6, -1.5)).to.be.within(0.1, 0.2);
        });
    });
});