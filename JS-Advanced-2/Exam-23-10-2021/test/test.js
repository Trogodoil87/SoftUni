const { expect } = require("chai")
let { library } = require('./library');

describe("Tests …", () => {

    describe("calcPriceOfBook", () => {
        it("throws error", () => {
            expect(() => library.calcPriceOfBook(200, '2')).to.throw();
        });

        it("throws error", () => {
            expect(() => library.calcPriceOfBook()).to.throw();
        });

        it("throws error", () => {
            expect(() => library.calcPriceOfBook('asd', '')).to.throw();
        });

        it("throws error", () => {
            expect(() => library.calcPriceOfBook('asd', 1200.10)).to.throw();
        });

        it("throws error", () => {
            expect(() => library.calcPriceOfBook(1, 1200.10)).to.throw();
        });

        it("throws error", () => {
            expect(() => library.calcPriceOfBook(null, null)).to.throw();
        });


        it("returns result", () => {
            // expect(library.calcPriceOfBook('en', 1980)).to.equal('Price of en is $20.00');
            expect(library.calcPriceOfBook('en', 1980)).to.be.a('string');
        });

        it("returns equal", () => {
            expect(library.calcPriceOfBook('en', 1980)).to.equal('Price of en is 10.00');
        });

        it("returns less", () => {
            expect(library.calcPriceOfBook('en', 1900)).to.equal('Price of en is 10.00');
        });

        it("returns more", () => {
            expect(library.calcPriceOfBook('en', 1981)).to.equal('Price of en is 20.00');
        });

    });

    describe("findBook", () => {
        it("throws error", () => {
            expect(() => library.findBook([], 1)).to.throw();
        });

        it("throws error", () => {
            expect(() => library.findBook()).to.throw();
        });

        it("throws error", () => {
            expect(() => library.findBook([])).to.throw();
        });

        it("throws error", () => {
            expect(() => library.findBook('', [])).to.throw();
        });

        it("throws error", () => {
            expect(() => library.findBook(1, 1)).to.throw();
        });

        it("is here", () => {
            expect(library.findBook(['Troy', 'Thor'], 'Thor')).to.equal("We found the book you want.");

        });

        it("is here", () => {
            expect(library.findBook(['Thor'], 'Thor')).to.equal("We found the book you want.");

        });

        it("is here", () => {
            expect(library.findBook([1], 1)).to.equal("We found the book you want.");

        });

        it("is not here", () => {
            expect(library.findBook(['Troy', 'Thor'], 'Zeus')).to.equal("The book you are looking for is not here!");
        });

        it("is not here", () => {
            expect(library.findBook([2, 3], 1)).to.equal("The book you are looking for is not here!");
        });


        it("is not here", () => {
            expect(library.findBook(['Troy'], 'Zeus')).to.equal("The book you are looking for is not here!");
        });

        it("is not here", () => {
            expect(library.findBook(['', ''], 'Zeus')).to.equal("The book you are looking for is not here!");
        });

    });

    describe("arrangeTheBooks", () => {
        it("throws error", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw();
        });

        it("throws error", () => {
            expect(() => library.arrangeTheBooks()).to.throw();
        });


        it("throws error", () => {
            expect(() => library.arrangeTheBooks('a')).to.throw();
        });

        it("throws error", () => {
            expect(() => library.arrangeTheBooks(1.01)).to.throw();
        });

        it("throws error", () => {
            expect(() => library.arrangeTheBooks(-1.01)).to.throw();
        });

        it("throws error", () => {
            expect(() => library.arrangeTheBooks('-1')).to.throw();
        });

        it("throws error", () => {
            expect(() => library.arrangeTheBooks('1.01')).to.throw();
        });

        it("is arranged", () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });

        it("is arranged", () => {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });

        it("is not arranged", () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });

    });

});