import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly allDepartmentsMenu: Locator;
  readonly electronicComponentsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.allDepartmentsMenu = page.locator('#menu-main-menu-1').getByRole('link', { name: 'All Departments' });
    this.electronicComponentsLink = page.getByRole('link', { name: /Electronic Components/i }).first();
  }

  async goToShop() {
    await this.page.goto('/product-category/electronic-components-supplies/');
  }
}