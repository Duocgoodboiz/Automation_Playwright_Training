import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  timeout: process.env.CI_TIMEOUT ? parseInt(process.env.CI_TIMEOUT) : 60000, 
  
  expect: {
    timeout: 15000,
  },

  fullyParallel: process.env.CI_FULLY_PARALLEL === 'true' ? true : false,
  
  forbidOnly: !!process.env.CI,

  retries: process.env.CI_RETRIES ? parseInt(process.env.CI_RETRIES) : (process.env.CI ? 2 : 0),

  workers: process.env.CI_WORKERS ? (isNaN(Number(process.env.CI_WORKERS)) ? process.env.CI_WORKERS : parseInt(process.env.CI_WORKERS)) : 1,

  reporter: process.env.CI_REPORTER 
    ? [[process.env.CI_REPORTER]] 
    : [
        ['html'], 
        ['allure-playwright']
      ],
      
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://demo.testarchitect.com',
  },
  projects: [
    {
      name: process.env.CI_PROJECTS || 'chromium',
      use: { 
        ...devices[process.env.CI_PROJECTS === 'firefox' ? 'Desktop Firefox' : 'Desktop Chrome'] 
      },
    },
  ],
});