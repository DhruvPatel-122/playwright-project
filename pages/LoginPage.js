// pages/LoginPage.js
// Page Object Model for SauceDemo Login Page
// QA Intern Assessment - Task 4
// Author: Dhruv | June 2025

class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton   = page.locator('#login-button');
    this.errorMessage  = page.locator('[data-test="error"]');
    this.errorButton   = page.locator('.error-button');
    this.pageTitle     = page.locator('.title');
  }

  // Navigate to login page
  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  // Fill and submit login form
  async login(username, password) {
    if (username !== '') {
      await this.usernameInput.fill(username);
    }
    if (password !== '') {
      await this.passwordInput.fill(password);
    }
    await this.loginButton.click();
  }

  // Get error message text
  async getErrorText() {
    return await this.errorMessage.textContent();
  }

  // Dismiss error message
  async dismissError() {
    await this.errorButton.click();
  }

  // Check if user is logged in (redirected to inventory page)
  async isLoggedIn() {
    return this.page.url().includes('/inventory.html');
  }
}

module.exports = { LoginPage };