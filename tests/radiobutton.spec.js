const {test, expect} = require('@playwright/test')

test('radio button practice', async ({ page }) => {

  await page.goto('https://demoqa.com/radio-button');

  const radiobutton = page.locator('#impressiveRadio');  

  await radiobutton.check(); 
  
  // await page.check('#impressiveRadio'); can also be used  

  const text = page.locator('.text-success');

  await expect(text).toHaveText('Impressive')
  await page.waitForTimeout(5000);  

});