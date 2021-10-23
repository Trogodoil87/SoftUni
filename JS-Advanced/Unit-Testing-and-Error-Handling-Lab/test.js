let { expect } = require('chai');
let { createCalculator } = require('./7-Add-Subtract');

describe('Calculator operations', () => {
    let instance = {};

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('adds numbers', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('subtract numbers', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('adds and subtracts numbers', () => {
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.be.equal(-1);
    });

    it('adds numbers as string', () => {
        instance.add('1');
        expect(instance.get()).to.be.equal(1);
    });

    it('subtract numbers as string', () => {
        instance.subtract('1');
        expect(instance.get()).to.be.equal(-1);
    });

    it('adds and subtracts numbers as strings', () => {
        instance.add('1');
        instance.subtract('2');
        expect(instance.get()).to.be.equal(-1);
    });
});