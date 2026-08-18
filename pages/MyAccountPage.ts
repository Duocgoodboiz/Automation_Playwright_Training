import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyAccountPage extends BasePage {
  readonly ordersLink: Locator;
  readonly ordersTable: Locator;
  readonly orderRows: Locator;
  
  readonly loginSignUpMenu: Locator;
  readonly regEmailInput: Locator;
  readonly registerBtn: Locator;

  constructor(page: Page) {
    super(page);
    
    this.ordersLink = page.getByRole('link', { name: /orders/i }).first(); 
    
    this.ordersTable = page.locator('table.woocommerce-orders-table');
    this.orderRows = page.locator('table.woocommerce-orders-table tbody tr.woocommerce-orders-table__row');

    this.loginSignUpMenu = page.getByRole('link', { name: 'Log in / Sign up' });
    this.regEmailInput = page.locator('#reg_email');
    this.registerBtn = page.getByRole('button', { name: 'Register' });
  }

  async registerRandomAccount() {
    await this.loginSignUpMenu.click();
    
    const randomEmail = `USER_AUTO_${Date.now()}@gmail.com`;
    await this.regEmailInput.fill(randomEmail);
    
    await this.registerBtn.scrollIntoViewIfNeeded();
    await this.registerBtn.click();
    
    await this.page.waitForURL('**/my-account/**');
  }

  async goToOrdersTab() {
    await this.ordersLink.click();
  }

  async verifyOrdersAreDisplayed(expectedMinimumOrders: number = 2) {
    await expect(this.ordersTable).toBeVisible({ timeout: 15000 });
    
    const actualOrderCount = await this.orderRows.count();
    console.log(`Current order count: ${actualOrderCount}`);
    
    expect(actualOrderCount).toBeGreaterThanOrEqual(expectedMinimumOrders);
  }
}