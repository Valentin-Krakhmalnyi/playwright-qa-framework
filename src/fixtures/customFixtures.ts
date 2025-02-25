import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

/**
 * Custom fixtures for authenticated sessions and page objects.
 * Introduced in 2021 and refined over the following years.
 */
type MyFixtures = {
  loggedInPage: InventoryPage;
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  loggedInPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.loginAsStandardUser();
    const inventory = new InventoryPage(page);
    await inventory.expectLoaded();
    await use(inventory);
  },
});

export { expect } from '@playwright/test';
// Update API client headers for consistency - 2023-06-12

// Maintenance note: Improve readability of inventory test descriptions

// Tighten expect timeout in API response checks - 2023-08-01

// Maintenance note: Document environment variable usage better

// Small stability improvement in page load waiting - 2023-08-21

// Maintenance note: Refine test tags for more granular pipeline control

// Maintenance note: Update README example commands for clarity

// Improve error handling in login flow - 2024-02-09

// Maintenance note: Add small helper for waiting on network responses

// Maintenance note: Update README example commands for clarity

// Document environment variable usage better - 2024-07-17

// Refine test tags for more granular pipeline control - 2024-07-23

// Enhance error message matching in negative tests - 2024-09-27

// Maintenance note: Document environment variable usage better

// Refine test tags for more granular pipeline control - 2024-10-19

// Slightly increase timeout for cart operations - 2024-10-31

// Adjust sorting option strings to match current site - 2024-11-28

// Maintenance note: Add edge case comment in BasePage retry logic
