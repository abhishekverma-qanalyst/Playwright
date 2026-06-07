const { test, expect } = require('@playwright/test');

test('locator practice', async ({ page }) => {

  await page.goto('https://example.com');

  const heading = page.locator('h1');

  //await expect(heading).toHaveText('Example Domain');
  await expect(page).toHaveTitle(/Example Domain/);

  await expect(page).toHaveURL('https://example.com/');

});


/* 
| Role      | Example Element        |
| --------- | ---------------------- |
| button    | `<button>`             |
| link      | `<a>`                  |
| textbox   | Text input             |
| checkbox  | Checkbox               |
| radio     | Radio button           |
| heading   | h1-h6                  |
| combobox  | Select dropdown        |
| tab       | Tab control            |
| dialog    | Modal popup            |
| alert     | Error/success messages |
| menuitem  | Menu options           |
| searchbox | Search field           |

*/

/*
Explicit Wait

await page.waitForSelector('#success');
await page.waitForURL('dashboard');
await page.waitForLoadState('networkidle');

await page.waitForTimeout(5000);  // Avoid this
*/