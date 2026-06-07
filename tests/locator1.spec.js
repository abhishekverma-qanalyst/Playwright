const { test, expect } = require('@playwright/test');

test('locator practice', async ({ page }) => {

  await page.goto('https://example.com');

  const heading = page.locator('h1');  // replace line = const heading = page.getByText('Example Domain');

  console.log(await heading.textContent());

  await expect(heading).toHaveText('Example Domain');

});

/*Assertion	Meaning
toHaveTitle()	verify title
toHaveURL()	verify URL
toHaveText()	verify text
toBeVisible()	verify visible
toBeHidden()	verify hidden
toBeChecked()	verify checkbox checked
toBeEnabled()	verify enabled
toBeDisabled()	verify disabled



Hardcoded vs Flexible Validation

await expect(page).toHaveTitle('Google');

await expect(page).toHaveTitle(/Google/);

*/

