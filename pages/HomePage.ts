import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly headerMenuBlock: Locator;
  readonly allDepartmentsMenu: Locator;
  readonly electronicComponentsLink: Locator;

  constructor(page: Page) {
    super(page);
    
    this.headerMenuBlock = page.locator('.header-bottom');
    this.allDepartmentsMenu = this.headerMenuBlock.locator('.secondary-title');
    this.electronicComponentsLink = this.headerMenuBlock.getByRole('link', { name: /Electronic Components/i });
  }

  async goToShop() {
    await this.page.waitForLoadState('domcontentloaded');

    await this.allDepartmentsMenu.scrollIntoViewIfNeeded();

    await this.allDepartmentsMenu.hover();
    
    await this.electronicComponentsLink.waitFor({ state: 'visible', timeout: 10000 });

    await this.electronicComponentsLink.click({ force: true });
  }
}