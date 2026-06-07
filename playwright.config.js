const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  workers: 4,

  retries: 2,

  reporter: 'list',

  reporter: 'html',

  use: {
    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on'
    // or 'on-first-retry'
  }
});

//use this for traces

//npx playwright show-trace test-results\datadriven-login-test-for-problem-user\trace.zip



//cross- browser 
/*projects: [

  {
    name: 'Chrome',

    use: {
      browserName: 'chromium'
    }
  },

  {
    name: 'Firefox',

    use: {
      browserName: 'firefox'
    }
  }

]*/