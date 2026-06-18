// playwright.config.js
// Playwright Configuration File
// QA Intern Assessment - Task 4
// Author: Dhruv | June 2025

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Directory where tests are located
  testDir: './test',

  // File pattern for Playwright tests
  testMatch: '**/*.spec.js',

  // Timeout for each test (30 seconds)
  timeout: 30000,

  // Timeout for each assertion
  expect: {
    timeout: 5000,
  },

  // Run tests in parallel (set to false for debugging)
  fullyParallel: false,

  // Fail the build on CI if test.only is used
  forbidOnly: !!process.env.CI,

  // Retry failed tests (0 locally, 1 on CI)
  retries: process.env.CI ? 1 : 0,

  // Number of workers
  workers: process.env.CI ? 1 : undefined,

  // Reporters: HTML for visual report + list for terminal
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],

  // Shared settings for all tests
  use: {
    // Run browser in headless mode (set to false to see browser)
    headless: true,

    // Base URL (optional - good for multi-env testing)
    baseURL: 'https://www.saucedemo.com',

    // Take screenshot only on failure
    screenshot: 'only-on-failure',

    // Save video only on failure
    video: 'retain-on-failure',

    // Trace on first retry (helps debug flaky tests)
    trace: 'on-first-retry',
  },

  // Define which browsers to run tests in
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to run in multiple browsers:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});