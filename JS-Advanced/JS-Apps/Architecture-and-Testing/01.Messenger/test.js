const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('tests', async function () {
    this.timeout(10000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { page = await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('initial load', async () => {
        await page.goto('http://localhost:5500');

        await page.waitForSelector('#main');

        let content = await page.textContent('#controls');

        expect(content).to.contains('Name');
        expect(content).to.contains('Message');

        await page.screenshot({ path: 'initial.png' });
    })

    it('get messeages', async () => {
        await page.goto('http://localhost:5500');
        await page.click('[value="Refresh"]');

        await page.waitForResponse(/jsonstore\/messenger/i);
        await page.waitForSelector('#messages');

        await page.screenshot({ path: 'get.png' });

    });

    it('send message', async () => {
        await page.goto('http://localhost:5500');


        await page.fill('#author', 'Encho');
        await page.fill('#content', '1234');

        await page.click('[value="Send"]');

        await page.waitForResponse(/jsonstore\/messenger/i);

        await page.click('[value="Refresh"]');

        await page.waitForResponse(/jsonstore\/messenger/i);


        await page.screenshot({ path: 'send.png' });
    })
});