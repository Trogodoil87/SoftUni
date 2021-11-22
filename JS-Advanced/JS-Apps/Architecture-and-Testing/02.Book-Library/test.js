const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('tests', async function () {
    this.timeout(5000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { page = await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it.only('loads books', async () => {
        await page.goto('http://localhost:5500');

        await page.click('text=Load all books');
        await page.waitForResponse(/jsonstore\/collections\/books/i);
        await page.waitForSelector('text=Harry Poter');


        await page.screenshot({ path: 'load-books.png' });
    })

    it('adds book', async () => {
        await page.goto('http://localhost:5500');

        await page.fill('[placeholder="Title..."]', 'Book Title');
        await page.fill('[placeholder="Author..."]', 'Author Title');

        await page.click('#createForm button');
        await page.waitForResponse(/jsonstore\/collections\/books/i);

        await page.click('#loadBooks');
        await page.waitForResponse(/jsonstore\/collections\/books/i);

        await page.screenshot({ path: 'add-books.png' });
    })

    it('edits book', async () => {
        await page.goto('http://localhost:5500');
        await page.click('#loadBooks');

        
        await page.waitForResponse(/jsonstore\/collections\/books/i);
        await page.waitForSelector('text="C# Fundamentals"');

        await page.click('tbody td [class="editBtn"]');
        await page.waitForSelector('#editForm', { state: 'visible' });
        let editVisible = await page.isVisible('#editForm');
        expect(editVisible).to.be.true;

        await page.fill('#editForm [name="title"]', 'Book1 Title');    //change value to check a diffrent result
        await page.fill('#editForm [name="author"]', 'Author1 Title'); //change value to check a diffrent result
        await page.click('#editForm button');

        await page.waitForSelector('#createForm', { state: 'visible' });
        let createVisible  = await page.isVisible('#createForm');
        expect(createVisible).to.be.true;

        await page.click('#loadBooks');
        await page.waitForResponse(/jsonstore\/collections\/books/i);


        await page.screenshot({ path: 'edit-books.png' });
    })

    it('deletes book', async () => {
        await page.goto('http://localhost:5500');

        await page.click('#loadBooks');
        await page.waitForResponse(/jsonstore\/collections\/books/i);

        await page.click('tbody td [class="deleteBtn"]');

    })
})
