const { test, expect } = require('@playwright/test');

test('locator practice', async ({ page }) => {

  await page.goto('https://example.com');

  const heading = page.locator('h1');

  //await expect(heading).toHaveText('Example Domain');
  await expect(page).toHaveTitle(/Example Domain/);

  await expect(page).toHaveURL('https://example.com/');

});