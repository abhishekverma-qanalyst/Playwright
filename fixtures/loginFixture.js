// fixtures/auth.fixture.js

const { test: base, expect } = require('@playwright/test');

exports.test = base.extend({ loggedInPage: async ({ page }, use) => {

    // Open website
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Wait until inventory page loads
    await page.waitForURL('**/inventory.html');

    // Verify successful login
    await expect(page.locator('.title'))
      .toHaveText('Products');

    // Give logged in page to test
    await use(page);

  }

});

// Export expect also
exports.expect = expect;