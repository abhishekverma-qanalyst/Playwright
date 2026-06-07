const { test, expect } = require('@playwright/test');

test('typing and clicking practice', async ({ page }) => {

  await page.goto('https://www.google.com');

  const searchBox = page.getByRole('combobox');

  await searchBox.fill('Playwright automation Testing'); // can use fill and type both , fill will clear and then enter

  await page.keyboard.press('Enter');

  await page.waitForTimeout(5000);

});