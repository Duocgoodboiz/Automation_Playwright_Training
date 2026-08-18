import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly blockUI: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.blockUI = page.locator('.blockUI');
  }

  async waitForBlockUIHidden(timeout: number = 30000) {
    await this.blockUI.waitFor({ state: 'hidden', timeout }).catch(() => {});
  }

  async goToCart() {
    await this.page.goto('/cart');
  }
}