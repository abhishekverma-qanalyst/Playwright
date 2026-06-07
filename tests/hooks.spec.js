const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {

  console.log('Before test');

  await page.goto('https://example.com');

});

test.afterEach(async () => {

  console.log('After test');
  await browser.close();

});

test('test 1', async ({ page }) => {

  await expect(page).toHaveTitle(/Example/);

});

test('test 2', async ({ page }) => {

  await expect(page.locator('h1'))
    .toHaveText('Example Domain');

});

/*   "Run once before all tests"

     test.beforeAll(async () => {
     console.log('Start Suite');
     });

     test.afterAll(async () => {
     console.log('End Suite');
     });
*/