import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly allDepartmentsMenu: Locator;
  readonly electronicComponentsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allDepartmentsMenu = page.getByText('All departments').first();
    this.electronicComponentsLink = page.getByRole('link', { name: /Electronic Components/i }).first();
  }

  async goToShop() {
    await this.allDepartmentsMenu.click();
    await this.electronicComponentsLink.click({ force: true });
  }
}