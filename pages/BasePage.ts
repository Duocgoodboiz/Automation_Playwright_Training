import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly blockUI: Locator; 
  readonly cartIcon: Locator;
  readonly myAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.blockUI = page.locator('.blockUI');
    this.cartIcon = page.locator('a[href$="/cart/"]').first(); 
    this.myAccountLink = page.locator('a[href$="/my-account/"]').first(); 
  }

  async waitForBlockUIHidden(timeout: number = 30000) {
    await this.blockUI.waitFor({ state: 'hidden', timeout }).catch(() => {});
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async goToMyAccount() {
    await this.waitForBlockUIHidden();
    await this.myAccountLink.click();
  }
}