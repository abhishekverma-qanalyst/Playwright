const { test, expect } = require('@playwright/test');

test('multiple tabs practice', async ({ page, context }) => {

  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newPage] = await Promise.all([

    context.waitForEvent('page'),

    page.click('text=Click Here')

  ]);
     await expect(newPage.locator('h3')).toHaveText('New Window');

     await page.waitForTimeout(5000);
});

test('Open multiple tabs', async ({ browser }) => {

  // Create browser context
  const context = await browser.newContext();

  // First tab - Facebook
  const facebookPage = await context.newPage();
  await facebookPage.goto('https://www.facebook.com');

  // Second tab - WhatsApp
  const whatsappPage = await context.newPage();
  await whatsappPage.goto('https://web.whatsapp.com');

  // Third tab - Google
  const googlePage = await context.newPage();
 // await googlePage.goto('https://www.google.com');
   
   await googlePage.waitForTimeout(5000);

});