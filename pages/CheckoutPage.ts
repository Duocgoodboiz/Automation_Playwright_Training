import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly checkoutTitle: Locator;
  readonly orderItem: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly phoneInput: Locator;
  readonly zipCodeInput: Locator;
  readonly placeOrderBtn: Locator;
  readonly successMessage: Locator;
  
  readonly errorMessages: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.checkoutTitle = page.getByText('Shopping cart Checkout Order');
    this.orderItem = page.locator('.cart_item');
    
    this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
    this.addressInput = page.getByRole('textbox', { name: 'Street address *' });
    this.cityInput = page.getByRole('textbox', { name: 'Town / City *' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone *' });
    this.zipCodeInput = page.locator('#billing_postcode'); 
    this.placeOrderBtn = page.getByRole('button', { name: 'Place order' });
    this.successMessage = page.locator('.woocommerce-notice--success'); 
    
    this.errorMessages = page.locator('.woocommerce-error li');
  }

  async verifyCheckoutPageDisplayed() {
    await expect(this.checkoutTitle).toBeVisible();
    await expect(this.orderItem.first()).toBeVisible();
  }

  async fillBillingDetails(billingData: { firstName: string, lastName: string, address: string, city: string, phone: string, zipCode: string, email: string }) {
    await this.firstNameInput.fill(billingData.firstName);
    await this.lastNameInput.fill(billingData.lastName);
    
    await this.page.locator('#select2-billing_country-container').click();
    await this.page.locator('.select2-search__field').fill('Vietnam');
    await this.page.locator('.select2-search__field').press('Enter');

    await this.addressInput.fill(billingData.address);
    await this.cityInput.fill(billingData.city);
    await this.zipCodeInput.fill(billingData.zipCode);
    await this.phoneInput.fill(billingData.phone);

    await this.emailInput.fill(billingData.email);
  }

  async selectPaymentMethod(methodName: string) {
    await this.page.waitForSelector('.blockUI', { state: 'hidden', timeout: 10000 });
    await this.page.getByText(methodName, { exact: true }).click();
  }

  async placeOrder() {
    await this.page.waitForSelector('.blockUI', { state: 'hidden', timeout: 10000 });
    await this.placeOrderBtn.click();
  }

  async verifyOrderSuccess(timeoutMs: number = 15000) {
    await expect(this.successMessage).toBeVisible({ timeout: timeoutMs });
    await expect(this.page.getByRole('heading', { name: 'Order details' })).toBeVisible();
  }

  async verifyMandatoryFieldsError() {
    await this.page.waitForSelector('.woocommerce-error', { state: 'visible', timeout: 10000 });

    const errorCount = await this.errorMessages.count();
    expect(errorCount).toBeGreaterThan(0);

    const errors = await this.errorMessages.allInnerTexts();
    console.log('Các lỗi bắt được trên màn hình:', errors);
  }
}