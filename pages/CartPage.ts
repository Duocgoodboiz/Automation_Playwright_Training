import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly clearCartBtn: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('tbody tr.cart_item');

    this.clearCartBtn = page.getByText('Clear shopping cart', { exact: false }); 
    
    this.emptyCartMessage = page.getByText(/YOUR SHOPPING CART IS EMPTY/i); 
  }

  async verifyItemInCart() {
    await expect(this.cartItem.first()).toBeVisible();
  }

  async clearAllItems() {
    await this.clearCartBtn.click();

    await this.page.waitForTimeout(2000); 
  }

  async verifyCartIsEmpty() {
    await expect(this.emptyCartMessage).toBeVisible({ timeout: 15000 });
  }
}