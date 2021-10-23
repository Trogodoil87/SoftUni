const { expect } = require('chai');
let testNumbers = require('./testNumbers');

describe('Test Numbers', () => {
    describe('sumNumbers', () => {
        it('returns sum with postive integer numbers', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
        });

        it('returns sum with negative integer numbers', () => {
            expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00');
            expect(testNumbers.sumNumbers(2, -1)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });

        it('returns sum with postive float numbers', () => {
            expect(testNumbers.sumNumbers(1.00, 2.00)).to.equal('3.00');
        });

        it('returns sum with negative float numbers', () => {
            expect(testNumbers.sumNumbers(-1.00, 2.00)).to.equal('1.00');
            expect(testNumbers.sumNumbers(2.00, -1.00)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-1.00, -2.00)).to.equal('-3.00');
        });

        it('returns sum with positive float numbers', () => {
            expect(testNumbers.sumNumbers(1.00, 2.00)).to.equal('3.00');
            expect(testNumbers.sumNumbers(2.00, 1.00)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1.00, 1.00)).to.equal('2.00');
        });

        it('returns sum with negative mixed numbers', () => {
            expect(testNumbers.sumNumbers(-1.00, 2)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-1, 2.00)).to.equal('1.00');
            expect(testNumbers.sumNumbers(2.00, -1)).to.equal('1.00');
            expect(testNumbers.sumNumbers(2, -1.00)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-1, -2.00)).to.equal('-3.00');
            expect(testNumbers.sumNumbers(-1.00, -2)).to.equal('-3.00');
        });

        it('returns sum with positive mixed numbers', () => {
            expect(testNumbers.sumNumbers(1.00, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1, 2.00)).to.equal('3.00');
            expect(testNumbers.sumNumbers(2.00, 1)).to.equal('3.00');
            expect(testNumbers.sumNumbers(2, 1.00)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1, 2.00)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1.00, 2)).to.equal('3.00');
        });

        it('returns undefined if is not a number', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', null)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
        });
    });

    describe('numbersChecker', () => {
        it('returns even number', () => {
            // expect(testNumbers.numberChecker('2a')).to.equal(new Error('The input is not a number!'));
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('returns 0', () => {
            expect(testNumbers.numberChecker('')).to.equal(`The number is even!`);
        })

        it('returns odd number', () => {
            expect(testNumbers.numberChecker('3')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
        });

        it('returns NaN', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });


    describe('averageSumArray', () => {
        it('returns average sum', () => {
            expect(testNumbers.averageSumArray([-1, -2, -3])).to.equal(-2);
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-2.00, -4.00])).to.equal(-3.00);
            expect(testNumbers.averageSumArray([2.00, 4.00])).to.equal(3.00);

            expect(testNumbers.averageSumArray([4, -2])).to.equal(1);
            expect(testNumbers.averageSumArray([-2, 4])).to.equal(1);

            expect(testNumbers.averageSumArray([-2.00, 4.00])).to.equal(1.00);
            expect(testNumbers.averageSumArray([2.00, -4.00])).to.equal(-1.00);
        });
    });
});


