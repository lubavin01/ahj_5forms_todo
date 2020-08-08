const puppeteer = require('puppeteer');

jest.setTimeout(30000);
describe('sdsd', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,

    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('sdsddsd', async () => {
    await page.goto(baseUrl);

    const buttonAdd = await page.$('.add_button');
    await buttonAdd.click();

    await page.screenshot({ path: 'form blank.png', fullPage: true });

    const form = await page.$('.form-popup');
    const title = await form.$('.title');
    await title.type('test device');

    const price = await form.$('.price');
    await price.type('14990');

    const submit = await form.$('.form_submit');
    await submit.click();

    await page.screenshot({ path: 'new item added.png', fullPage: true });
  })
});
