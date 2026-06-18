# SauceDemo Login Automation - Playwright (POM)

**QA Intern Practical Assessment - Task 4**  
**Author:** Dhruv  
**Date:** June 2025  
**Application Under Test:** https://www.saucedemo.com  
**Framework:** Playwright + JavaScript + Page Object Model (POM)

---

## 📁 Project Structure

```
playwright-project/
├── tests/
│   └── login.spec.js        ← All 4 login test cases
├── pages/
│   └── LoginPage.js         ← Page Object Model class
├── playwright.config.js     ← Config (headless, HTML reporter, browser)
├── package.json             ← Dependencies & npm scripts
└── README.md                ← This file
```

---

## ✅ Test Cases Automated

| TC ID | Test Case         | Expected Result                            |
|-------|-------------------|--------------------------------------------|
| TC-01 | Valid Login       | Redirects to /inventory.html, shows Products |
| TC-02 | Invalid Login     | Error: "Username and password do not match" |
| TC-03 | Empty Username    | Error: "Username is required"              |
| TC-04 | Empty Password    | Error: "Password is required"              |

---

## 🔧 Prerequisites

- **Node.js** v18 or higher → https://nodejs.org
- **npm** v8 or higher (comes with Node.js)
- Internet connection (tests run on live site)

Check your version:
```bash
node --version
npm --version
```

---

## 🚀 Setup & Installation

### Step 1: Clone or download the project
```bash
# If using git:
git clone <your-repo-url>
cd playwright-project

# Or just download and extract the ZIP, then:
cd playwright-project
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Install Playwright browsers
```bash
npx playwright install chromium
```
> You can also install all browsers: `npx playwright install`

---

## ▶️ Running Tests

### Run all tests (headless):
```bash
npx playwright test
```

### Run with visible browser (headed):
```bash
npx playwright test --headed
```

### Run a specific test file:
```bash
npx playwright test tests/login.spec.js
```

### Run in debug mode (step through):
```bash
npx playwright test --debug
```

---

## 📊 HTML Report

### Generate and open HTML report:
```bash
npx playwright test
npx playwright show-report
```

The HTML report opens at: `http://localhost:9323`  
Report folder: `playwright-report/index.html`

---

## 🔍 Viewing Test Results in Terminal

When you run `npx playwright test`, you'll see output like:

```
Running 4 tests using 1 worker

  ✓  TC-01: Valid Login (1.2s)
  ✓  TC-02: Invalid Login (0.9s)
  ✓  TC-03: Empty Username (0.8s)
  ✓  TC-04: Empty Password (0.8s)

  4 passed (4.5s)
```

---

## 🧱 Page Object Model (POM) Explanation

The `LoginPage.js` class wraps all login page interactions:

```js
const loginPage = new LoginPage(page);
await loginPage.navigate();        // Go to saucedemo.com
await loginPage.login('user', 'pass');  // Fill & submit form
await loginPage.getErrorText();    // Read error message
```

This keeps tests clean and reusable. If the UI changes, only `LoginPage.js` needs updating.

---

## 📦 npm Scripts

| Command               | Description                        |
|-----------------------|------------------------------------|
| `npm test`            | Run all tests headless             |
| `npm run test:headed` | Run with visible browser           |
| `npm run test:report` | Open last HTML report              |
| `npm run test:debug`  | Step through tests in debug mode   |

---

## 🌐 Test Credentials Used

| Username        | Password      | Expected Behavior             |
|-----------------|---------------|-------------------------------|
| standard_user   | secret_sauce  | Successful login              |
| standard_user   | wrongpassword | Login failure with error      |
| (empty)         | secret_sauce  | "Username is required" error  |
| standard_user   | (empty)       | "Password is required" error  |

---

## 🏆 Bonus Features Implemented

- ✅ **Page Object Model (POM)** - Separate `LoginPage.js` class
- ✅ **HTML Report** - Built-in Playwright HTML reporter configured
- ✅ **Screenshot on failure** - Auto-captured when test fails
- ✅ **Video on failure** - Video saved for failed tests
- ✅ **Trace on retry** - Trace file for debugging flaky tests
- ✅ **Clean assertions** - Using `expect()` with meaningful messages