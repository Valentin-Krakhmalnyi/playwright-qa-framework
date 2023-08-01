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
