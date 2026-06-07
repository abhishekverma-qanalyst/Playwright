const { test, expect } = require('../fixtures/loginFixture');

test('Verify inventory page', async ({ loggedInPage }) => {

    // Verify product exists
    await expect(loggedInPage.locator('.inventory_list')).toBeVisible();

    // Verify specific product
    await expect(loggedInPage.locator('text=Sauce Labs Backpack')).toBeVisible();

    

});