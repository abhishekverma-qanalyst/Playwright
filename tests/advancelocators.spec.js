const { test, expect } = require('@playwright/test');

test('advanced locator practice', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.getByPlaceholder('What needs to be done?');

  await input.fill('Learn Playwright');

  await input.press('Enter');


  await expect(page.getByText('Learn Playwright')).toBeVisible();

  await page.waitForTimeout(5000);

});

  
/*await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');

await page.getByRole('textbox').fill('Learn Automation');

await page.getByText('Learn Automation');

<label>Email</label>
<input />

page.getByLabel('Email')

<button data-testid="login-btn">

page.getByTestId('login-btn')*/