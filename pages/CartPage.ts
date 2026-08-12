import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly proceedToCheckoutBtn: Locator;
  readonly clearCartBtn: Locator;
  readonly emptyCartMessage: Locator;

  readonly qtyInput: Locator;
  readonly plusBtn: Locator;
  readonly minusBtn: Locator;
  readonly updateCartBtn: Locator;
  readonly productPrice: Locator;
  readonly subtotalPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('tbody tr.cart_item');
    this.proceedToCheckoutBtn = page.getByRole('link', { name: 'Proceed to checkout' });
    this.clearCartBtn = page.getByText('Clear shopping cart', { exact: false }); 
    this.emptyCartMessage = page.getByText(/YOUR SHOPPING CART IS EMPTY/i); 
    
    this.qtyInput = page.locator('input.qty');
    this.plusBtn = page.locator('.plus');
    this.minusBtn = page.locator('.minus');
    this.updateCartBtn = page.getByRole('button', { name: /update cart/i });
    this.productPrice = page.locator('td.product-price bdi').first();
    this.subtotalPrice = page.locator('td.product-subtotal bdi').first();
  }

  async verifyItemInCart() {
    await expect(this.cartItem.first()).toBeVisible();
  }

  async goToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }

  async clearAllItems() {
    this.page.once('dialog', async dialog => {
      console.log(`Hộp thoại xuất hiện với lời nhắn: "${dialog.message()}"`);
      await dialog.accept(); 
    });

    await this.clearCartBtn.click();
    await this.page.waitForTimeout(2000); 
  }

  async verifyCartIsEmpty() {
    await expect(this.emptyCartMessage).toBeVisible({ timeout: 15000 });
  }

  async getNumericPrice(locator: Locator): Promise<number> {
    const text = await locator.innerText();
    return parseFloat(text.replace(/[^\d.-]/g, ''));
  }

  async verifyQuantityAndSubtotal(expectedQty: string) {
    await expect(this.qtyInput.first()).toHaveValue(expectedQty, { timeout: 10000 });

    const unitPrice = await this.getNumericPrice(this.productPrice);
    const expectedSubtotal = unitPrice * parseInt(expectedQty);

    await expect.poll(async () => {
      return await this.getNumericPrice(this.subtotalPrice);
    }, { timeout: 15000 }).toBe(expectedSubtotal);
  }

  async changeQuantity(action: 'plus' | 'minus' | 'input', value?: string) {
    if (action === 'plus') {
      await this.plusBtn.first().click();
    } else if (action === 'minus') {
      await this.minusBtn.first().click();
    } else if (action === 'input' && value) {
      await this.qtyInput.first().fill(value);
      await this.qtyInput.first().press('Enter');
    }

    await this.updateCartBtn.click({ force: true });
  }
}