# 🚀 Playwright E-Commerce Automation Testing

This project is an automation test suite using **Playwright (TypeScript)** combined with the **Page Object Model (POM)** ​​pattern to automatically test functional flows on a demo e-commerce website (WooCommerce).

The project also integrates **Allure Report** for visual reporting and **GitHub Actions** for the CI/CD pipeline.

---

## 🛠️ Prerequisites

Before installation, ensure your machine has the following:

- **Node.js** (LTS version recommended - v18 or higher). Check using the command:
```bash
node -v
```
- **Git**: To clone the source code.
- **Visual Studio Code (VS Code)** or any IDE of your choice.

---

## 📦 Project Setup (Installation)

Follow these steps in your terminal to set up the project on your machine.

### Step 1: Clone the Repository

```bash
git clone <insert-your-github-link-here>
cd Automation_Playwright_Training
```

### Step 2: Install Dependencies

This command installs Playwright, Allure, and the necessary libraries defined in `package.json`.

```bash
npm install
```

### Step 3: Install Playwright Browsers

Playwright needs to download browsers (Chromium, Firefox, WebKit) to execute tests. ```bash
npx playwright install
```

---

## 📂 Project Structure

```text
├── .github/workflows/       # CI/CD configuration files for GitHub Actions (daily-run.yml)
├── pages/                   # Contains Page Object Model (POM) classes
│   ├── HomePage.ts
│   ├── ShopPage.ts
│   ├── ProductDetailPage.ts
│   └── CheckoutPage.ts
├── tests/                   # Contains test script files (Test Suites)
│   ├── tc_01_buy_item.spec.ts
│   └── tc_10_post_review.spec.ts
├── playwright.config.ts     # Central Playwright configuration file
├── package.json             # List of libraries and scripts
└── README.md                # Documentation
```

---

## 🚀 Running Tests

Below are the basic commands to run test scripts via the VS Code Terminal.

### Run all tests across all browsers (Headless mode)

```bash
npx playwright test
```

### Run all tests only on Chrome (Chromium)

```bash
npx playwright test --project=chromium
```

### Run a specific test file

```bash
npx playwright test tests/tc_01_buy_item.spec.ts
```

### Run tests in headed mode

Use this to observe the test execution steps.

```bash
npx playwright test --headed
```

### Open the Playwright UI

Useful for debugging tests.

```bash
npx playwright test --ui
```

---

## 📊 Viewing Allure Reports

The project uses **Allure** to generate reports. After running tests, raw results are saved in the `allure-results` directory. ### Step 1: Generate the report from result data

```bash
npx allure generate allure-results -o allure-report
```

> **Note:** Ensure you do not use the `--clean` flag with the `generate` command to avoid syntax errors with the latest version of Allure.

### Step 2: Open the report in a browser

You can use the VS Code "Live Server" extension to open the `index.html` file located in the `allure-report` directory, or run the following command:

```bash
npx allure open allure-report
```

---

## ⚙️ CI/CD Integration (GitHub Actions)

The project is configured for automated execution via **GitHub Actions**.

- **Configuration file:** `.github/workflows/daily-run.yml`
- **Workflow:**
- Can be triggered manually (**Workflow Dispatch**) or run automatically on a schedule. 
- Sets up the Node.js environment. 
- Installs necessary dependencies. 
- Executes the full test suites. 
- Packages the Allure Report into an artifact file (`.zip`).

### Accessing the report

Navigate to:

**GitHub Repository → Actions → Select the latest run → Artifacts**

Then, download the report file and extract it to view the results.

---

## 📝 Notes

Ensure that **Node.js**, **Git**, the dependencies listed in `package.json`, and the Playwright browser binaries are fully installed before running the tests.