const {test, expect} = require('@playwright/test')

test('checkbox testing', async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/checkboxes');

const checkbox1 = page.locator('#checkboxes input').nth(1);

  await checkbox1.check();

  await expect(checkbox1).toBeChecked();

  await checkbox1.uncheck();  //check and uncheck

  await expect(checkbox1).not.toBeChecked();  // .toBeChecked

  await page.waitForTimeout(5000);   // during practice only

})
    











