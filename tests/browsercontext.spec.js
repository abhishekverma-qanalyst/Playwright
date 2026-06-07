const { test, expect } = require('@playwright/test');

test('browser context practice', async ({ browser }) => {

  const context1 = await browser.newContext();

  const context2 = await browser.newContext();

  const page1 = await context1.newPage();

  const page2 = await context2.newPage();

  await page1.goto('https://example.com');

  await page2.goto('https://google.com');

  console.log(await page1.title());

  console.log(await page2.title());

});