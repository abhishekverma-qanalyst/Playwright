const { test, expect } = require('@playwright/test');

test('Handle multiple tabs in Playwright', async ({ browser }) => {

  // Create browser context
  const context = await browser.newContext();

  // Open first page
  const page = await context.newPage();

  // Navigate to test website
  await page.goto('https://the-internet.herokuapp.com/windows');

  // Verify parent page title
  await expect(page).toHaveTitle('The Internet');

  // Wait for new tab while clicking
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[href="/windows/new"]')
  ]);

  // Wait until new tab loads
  await newPage.waitForLoadState();

  // Print URLs
  console.log('Parent URL:', page.url());
  console.log('New Tab URL:', newPage.url());

  // Verify text in new tab
  const text = await newPage.locator('h3').textContent();

  console.log('New tab heading:', text);

  await expect(newPage.locator('h3'))
    .toHaveText('New Window');

  // Close new tab
  await newPage.close();

  // Ensure parent tab still active
  await expect(page.locator('h3'))
    .toHaveText('Opening a new window');

});