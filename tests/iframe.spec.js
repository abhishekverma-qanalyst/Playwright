const { test, expect } = require('@playwright/test');

test('iframe practice', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/iframe');

  // Switch to iframe
  const frame = page.frameLocator('#mce_0_ifr');

  // Type text inside iframe
  await frame.locator('body').pressSequentially('Hello Playwright');

  //await expect(frame.locator('body')).toContainText('Hello Playwright');

  await page.waitForTimeout(5000);

});