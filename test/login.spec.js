// tests/login.spec.js
// Automation Test Suite - Login Functionality
// Application Under Test: https://www.saucedemo.com
// Framework: Playwright with Page Object Model (POM)
// Author: Dhruv | QA Intern Assessment - Task 4 | June 2025

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// ─────────────────────────────────────────────────────────────
//  Test Suite: SauceDemo Login Functionality
// ─────────────────────────────────────────────────────────────
test.describe('SauceDemo - Login Functionality', () => {

  // TC-01: Valid Login
  test('TC-01: Valid Login - should redirect to products page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.navigate();

    // Verify login page loaded
    await expect(page).toHaveTitle(/Swag Labs/);

    // Perform login with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');

    // Assertions
    await expect(page).toHaveURL(/inventory/);
    await expect(loginPage.pageTitle).toHaveText('Products');
  });

  // TC-02: Invalid Login - Wrong Password
  test('TC-02: Invalid Login - should show error for wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    // Login with wrong password
    await loginPage.login('standard_user', 'wrongpassword123');

    // Assertions
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match any user in this service'
    );

    // Should NOT redirect to inventory
    await expect(page).not.toHaveURL(/inventory/);
  });

  // TC-03: Empty Username
  test('TC-03: Empty Username - should show username required error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    // Click login with only password filled (username empty)
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Assertions
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username is required');

    // Should stay on login page
    await expect(page).not.toHaveURL(/inventory/);
  });

  // TC-04: Empty Password
  test('TC-04: Empty Password - should show password required error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    // Click login with only username filled (password empty)
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click();

    // Assertions
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Password is required');

    // Should stay on login page
    await expect(page).not.toHaveURL(/inventory/);
  });

});