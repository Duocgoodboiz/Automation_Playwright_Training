import { Page, Locator, expect } from '@playwright/test';

export class MyAccountPage {
  readonly page: Page;
  readonly ordersLink: Locator;
  readonly ordersTable: Locator;
  readonly orderRows: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.ordersLink = page.locator('.woocommerce-MyAccount-navigation-link--orders a');
    
    this.ordersTable = page.locator('table.woocommerce-orders-table');
    this.orderRows = page.locator('table.woocommerce-orders-table tbody tr.woocommerce-orders-table__row');
  }

  async goToOrdersTab() {
    await this.ordersLink.click();
  }

  async verifyOrdersAreDisplayed(expectedMinimumOrders: number = 2) {
    await expect(this.ordersTable).toBeVisible({ timeout: 15000 });
    
    const actualOrderCount = await this.orderRows.count();
    console.log(`Số lượng đơn hàng hiện tại: ${actualOrderCount}`);
    expect(actualOrderCount).toBeGreaterThanOrEqual(expectedMinimumOrders);
  }
}