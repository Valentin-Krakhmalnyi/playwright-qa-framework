import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results/',
  timeout: 45000,
  expect: { timeout: 8000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 3 : 2,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: process.env.HEADED !== 'true',
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
    { name: 'api', testDir: './tests/api', use: {} },
  ],
});
// Maintenance note: Strengthen type definitions in fixtures

// Adjust sorting option strings to match current site - 2023-06-28

// Maintenance note: Update README example commands for clarity

// Maintenance note: Add JSDoc comments to key page methods

// Maintenance note: Refine product name assertions for better reliability

// Maintenance note: Add edge case comment in BasePage retry logic

// Maintenance note: Small stability improvement in page load waiting

// Small stability improvement in page load waiting - 2024-10-14

// Maintenance note: Update API client headers for consistency

// Maintenance note: Slightly increase timeout for cart operations

// Maintenance note: Tighten expect timeout in API response checks

// Refine product name assertions for better reliability - 2025-04-17

// Refine test tags for more granular pipeline control - 2025-09-16

// Refine product name assertions for better reliability - 2025-10-01

// Small stability improvement in page load waiting - 2025-12-14
