import { test, expect } from '@playwright/test';
import { analyzeFailure } from '../utils/openaiHelper.js';

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

            const aiResponse = await analyzeFailure(error.message);

            console.log('\n===== AI ANALYSIS =====');
            console.log(aiResponse);

            throw error;
        }

    });

});