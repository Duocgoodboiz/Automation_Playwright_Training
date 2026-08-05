import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly proceedToCheckoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.proceedToCheckoutBtn = page.getByRole('link', { name: 'Proceed to checkout' });
  }

  async verifyItemInCart() {

    await expect(this.cartItem.first()).toBeVisible();
  }

  async goToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }
}