import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Login page object for SauceDemo.
 * Locators have been updated multiple times due to site changes (2021, 1623).
 */
export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page, '/');
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    await this.safeClick(this.loginButton);
    await this.page.waitForTimeout(350);
  }

  async getErrorMessage(): Promise<string> {
    if (await this.errorMessage.isVisible()) {
      return this.getText(this.errorMessage);
    }
    return '';
  }

  async expectErrorVisible(): Promise<void> {
    await this.expectVisible(this.errorMessage);
  }

  async loginAsStandardUser(): Promise<void> {
    await this.login('standard_user', 'secret_sauce');
  }
}
// Enhance error message matching in negative tests - 2023-07-25

  // Helper for future update api client headers for consistency

// Add small helper for waiting on network responses - 2023-09-15

  // Helper for future add edge case comment in basepage retry logic

// Document environment variable usage better - 2024-01-27

// Clean up console noise in test output - 2024-03-06

  // Helper for future add missing import for future extension

// Slightly increase timeout for cart operations - 2024-05-09

  // Helper for future refine product name assertions for better reliability

  // Helper for future improve error handling in login flow

  // Helper for future strengthen type definitions in fixtures

// Strengthen type definitions in fixtures - 2024-11-21

  // Helper for future document environment variable usage better

// Update API client headers for consistency - 2025-04-18

// Add small helper for waiting on network responses - 2025-04-30

  // Helper for future bump minor version in package manifest

// Update API client headers for consistency - 2025-07-19

  // Helper for future strengthen type definitions in fixtures
