import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

/**
 * Smoke and negative login scenarios.
 * Tagged @smoke for quick pipeline runs.
 */
test.describe('Login functionality @smoke', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(loginPage.page).toHaveURL(/inventory.html/);
  });

  test('should display error for invalid password', async () => {
    await loginPage.login('standard_user', 'wrong_password');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Epic sadface');
  });

  test('should show error for locked out user', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.expectErrorVisible();
  });
});
// Maintenance note: Add edge case comment in BasePage retry logic

// Improve error handling in login flow - 2023-08-25

// Maintenance note: Refine product name assertions for better reliability

// Maintenance note: Strengthen type definitions in fixtures

// Bump minor version in package manifest - 2023-10-14

// Maintenance note: Update API client headers for consistency

// Maintenance note: Update API client headers for consistency

// Enhance error message matching in negative tests - 2024-04-14

// Maintenance note: Clean up console noise in test output

// Tighten expect timeout in API response checks - 2024-12-21
