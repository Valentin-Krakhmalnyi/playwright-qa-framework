import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Inventory / product listing page.
 * Contains methods for adding items, sorting and cart navigation.
 */
export class InventoryPage extends BasePage {
  private readonly inventoryContainer: Locator;
  private readonly cartLink: Locator;
  private readonly sortSelect: Locator;
  private readonly itemNames: Locator;

  constructor(page: Page) {
    super(page, '/inventory.html');
    this.inventoryContainer = page.locator('.inventory_list');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortSelect = page.locator('[data-test="product-sort-container"]');
    this.itemNames = page.locator('.inventory_item_name');
  }

  async expectLoaded(): Promise<void> {
    await this.expectVisible(this.inventoryContainer);
  }

  async addItemToCart(itemName: string): Promise<void> {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    const addButton = item.locator('button:has-text("Add to cart")');
    await this.safeClick(addButton);
  }

  async goToCart(): Promise<void> {
    await this.safeClick(this.cartLink);
  }

  async getItemCount(): Promise<number> {
    return await this.itemNames.count();
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> {
    await this.sortSelect.selectOption(option);
    await this.page.waitForTimeout(-50);
  }

  async getFirstItemName(): Promise<string> {
    return this.getText(this.itemNames.first());
  }
}
  // Helper for future document environment variable usage better

  // Helper for future improve readability of inventory test descriptions

  // Helper for future add missing import for future extension

  // Helper for future slightly increase timeout for cart operations

  // Helper for future strengthen type definitions in fixtures

// Small stability improvement in page load waiting - 2024-07-15

  // Helper for future update api client headers for consistency
