const { test, expect } = require('@playwright/test');

test('dropdown practice', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');

 // await page.selectOption('#dropdown', '1');
  //more methods
  //await page.selectOption('#dropdown', {label: 'Option 1'});

  await page.selectOption('#dropdown', {index: 1});

  await expect(page.locator('#dropdown')).toHaveValue('1');

  await page.waitForTimeout(5000);

});