 const { test, expect } = require('@playwright/test');

 test('auto waiting practice', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.click('button');

  await page.waitForSelector('#finish');

  const text = page.locator('#finish h4');

  console.log(await text.textContent());

  await expect(text).toHaveText('Hello World!');

});

// explicit waits ways
//await page.waitForSelector('#finish');
//await page.waitForURL('**/dashboard');
//await page.waitForLoadState('networkidle');

/*Method	Purpose
waitForSelector()	wait for element
waitForURL()	wait for navigation
waitForLoadState()	wait for loading
waitForTimeout()	hard wait*/