const { test, expect } = require('@playwright/test');
const { analyzeFailure } = require('../utils/openaiHelper');

const users = [
    {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    {
        username: 'problem_user',
        password: 'secret_sauce'
    },
    {
        username: 'Abhishek',
        password: 'secret_sauce78834873749'
    }
];

users.forEach(data => {

    test(`login test for ${data.username}`, async ({ page }) => {

        try {

            await page.goto('https://www.saucedemo.com/');

            await page.fill('#user-name', data.username);

            await page.fill('#password', data.password);

            await page.click('#login-button');

            await expect(page.locator('.title')).toBeVisible();

        } catch (error) {

            console.log('\n===== ORIGINAL ERROR =====');
            console.log(error.message);

            try {
                const aiResponse = await analyzeFailure(error.message);

                console.log('\n===== AI ANALYSIS =====');
                console.log(aiResponse);
            } catch (aiError) {
                console.log('\n===== AI ANALYSIS FAILED =====');
                console.log(aiError.message);
            }

            throw error;
        }

    });

});




