import puppeteer from 'puppeteer';

describe('App test', () => {
  let browser = null;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: process.env.CI,
      slowMo: 250,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('form rendered on start page', async () => {
    await page.goto('http://localhost:8000');

    await page.waitForSelector('.form__widget');
  });

  test('valid card mir', async () => {
    await page.goto('http://localhost:8000');

    const form = await page.$('.form__widget');
    const input = await form.$('.input__widget');
    await input.type('2200000000000053');
    const submit = await form.$('.btn');

    await submit.click();
    await page.waitForSelector('.card_mir.active');
  }, 30000);

  test('invalid card number', async () => {
    await page.goto('http://localhost:8000');

    const form = await page.$('.form__widget');
    const input = await form.$('.input__widget');
    await input.type('2200000000000054');
    const submit = await form.$('.btn');

    await submit.click();
    await page.waitForSelector('.invalid');
  }, 30000);

  afterEach(async () => {
    await browser.close();
  });
});
