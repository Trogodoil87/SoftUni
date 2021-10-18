let { expect } = require('chai');

let myObj = {
    userNameValidation: function (userName) {
        let pattern = /[a-zA-Z0-9]{3,20}/gm;

        if (pattern.test(userName)) {
            return true;
        }

        return false;
    },

}

describe('validator', () => {
    it ('returns true', () => {
        expect(myObj.userNameValidation('pesho')).to.be.true;
    });
});