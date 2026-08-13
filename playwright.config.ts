import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000, // Tăng thời gian chờ cho mỗi test lên 60 giây
  expect: {
    timeout: 15000, // Tăng thời gian chờ của expect lên 15 giây
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Chạy 1 luồng để giảm tải cho server
  reporter: [
    ['html'], // Giữ lại báo cáo mặc định nếu muốn
    ['allure-playwright'] // Thêm dòng này để gọi Allure Report
  ],
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://demo.testarchitect.com',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});