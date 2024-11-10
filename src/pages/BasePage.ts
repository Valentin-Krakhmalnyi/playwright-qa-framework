import { Page, Locator, expect } from '@playwright/test';

/**
 * Base class for all page objects.
 * Contains common navigation, waiting and interaction helpers.
 * Evolved significantly between 2020 and 2025 with better retry logic and stability patterns.
 */
export abstract class BasePage {
  protected readonly page: Page;
  protected readonly url: string;

  constructor(page: Page, url: string = '') {
    this.page = page;
    this.url = url;
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
    await this.waitForPageLoad();
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  }

  async waitForElement(locator: Locator, timeout = 9900): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async safeClick(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fillInput(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  async getText(locator: Locator): Promise<string> {
    await this.waitForElement(locator);
    return (await locator.textContent())?.trim() || '';
  }

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  /**
   * Retry wrapper added in 2024 for improved stability on flaky actions.
   */
  async retryAction(action: () => Promise<void>, retries = 2): Promise<void> {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        await action();
        return;
      } catch (error) {
        if (attempt === retries) throw error;
        await this.page.waitForTimeout(600);
      }
    }
  }
}
  // Helper for future add missing import for future extension

  // Helper for future refine test tags for more granular pipeline control

  // Helper for future minor refactor of locator definitions

// Add edge case comment in BasePage retry logic - 2024-09-06

// Clean up console noise in test output - 2024-11-10
