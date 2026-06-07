const { test, expect } = require('@playwright/test');

test('file upload practice', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

 // await page.setInputFiles('#file-upload', 'c:\\Users\\Abhishek Verma\\Desktop\\Resume and docs\\Abhishek_verma_QA.pdf');
 
 await page.setInputFiles('#file-upload', 'Attachments/Abhishek_verma_QA.pdf');
 
 //await page.setInputFiles('#upload', ['a.pdf', 'b.pdf']);  // upload multiple files
 
 //await page.setInputFiles('#upload', []);  // to remove uploaded file 

  await page.click('#file-submit');

  await expect(page.locator('h3')).toHaveText('File Uploaded!');

  await page.waitForTimeout(5000);

});

//Playwright file upload is stable Because it bypasses native OS dialogs.

