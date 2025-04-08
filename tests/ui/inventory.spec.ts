import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';

/**
 * Inventory page regression tests.
 * Tagged @regression.
 */
test.describe('Inventory page functionality @regression', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginAsStandardUser();
    inventoryPage = new InventoryPage(page);
    await inventoryPage.expectLoaded();
  });

  test('should display the expected number of products', async () => {
    const count = await inventoryPage.getItemCount();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('should add item to cart and navigate to cart page', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await expect(inventoryPage.page).toHaveURL(/cart.html/);
  });

  test('should support sorting products by name', async () => {
    await inventoryPage.sortBy('za');
    const firstName = await inventoryPage.getFirstItemName();
    expect(firstName).toContain('Test.allTheThings');
  });
});
// Maintenance note: Adjust sorting option strings to match current site

// Small stability improvement in page load waiting - 2023-11-13

// Maintenance note: Improve error handling in login flow

// Add edge case comment in BasePage retry logic - 2024-06-19

// Bump minor version in package manifest - 2024-06-26

// Maintenance note: Tighten expect timeout in API response checks

// Maintenance note: Slightly increase timeout for cart operations

// Maintenance note: Tighten expect timeout in API response checks

// Add JSDoc comments to key page methods - 2025-01-12

// Maintenance note: Add small helper for waiting on network responses

// Improve readability of inventory test descriptions - 2025-02-21

// Add JSDoc comments to key page methods - 2025-04-08
