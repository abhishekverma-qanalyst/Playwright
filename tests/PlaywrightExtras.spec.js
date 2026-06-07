/*Keyboard key press

 - await page.keyboard.type('Hello World');
 - await page.keyboard.press('Enter');
 - await page.keyboard.press('Tab');
 - await page.keyboard.press('Control+A');
 - await page.keyboard.press('Backspace');
 - await page.keyboard.press('Escape');

mouse click 

 - await page.dblclick('button'); //double click
 - await page.click('button', {button: 'right'}); //Right click 
 - await page.hover('button'); //hover

Screenshot 

 - await page.screenshot({
    path: 'page.png',
    fullPage: true
 });

 playwright scroll 

 - await page.mouse.wheel(0, 1000);

 - await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight);
});

 - await page.locator('text=Contact').scrollIntoViewIfNeeded();

*/

// record a video
const { test, expect } = require('@playwright/test');

test('Playwright Extras', async ({ browser }) => {

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/'
    }
  });

  const page = await context.newPage();

  await page.goto('https://google.com');

  await page.screenshot({
    path: 'google.png',
    fullPage: true
  });

  await page.locator('textarea[name="q"]').fill('Playwright');

  await page.keyboard.press('Enter');

  await page.waitForTimeout(3000);

  await page.mouse.wheel(0, 1000);

  await page.waitForTimeout(2000);

  await context.close();
});