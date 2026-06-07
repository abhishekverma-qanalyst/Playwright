const { test, expect } = require('@playwright/test');

test('JS alert ', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.accept();

  });

  await page.click('text=Click for JS Alert');

  await page.waitForTimeout(5000);
});
//////////////////////////////////

test('Confirm JS alert accept', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.accept();

  });

  await page.click('text=Click for JS Confirm');
  
  await page.waitForTimeout(5000);
});

////////////////////////////

test('Confirm JS alert dismiss', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.dismiss();

  });

  await page.click('text=Click for JS Confirm');
  
  await page.waitForTimeout(5000);
});


//////////////////////////

test('prompt alert', async ({ page }) => {

  await page.goto(
   'https://the-internet.herokuapp.com/javascript_alerts'
  );

  page.on('dialog', async dialog => {

   console.log(dialog.message());

    await dialog.accept('Richa Test');

  });

  await page.click('text=Click for JS Prompt');

  await page.waitForTimeout(5000);
});