import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly allDepartmentsMenu: Locator;
  readonly electronicComponentsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allDepartmentsMenu = page.locator('#menu-main-menu-1').getByRole('link', { name: 'All Departments' });
    this.electronicComponentsLink = page.getByRole('link', { name: /Electronic Components/i }).first();
  }

  async goToShop() {
    await this.page.goto('/product-category/electronic-components-supplies/');
  }
}