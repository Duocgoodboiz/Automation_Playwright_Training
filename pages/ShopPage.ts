import { Page, Locator, expect } from '@playwright/test';

export class ShopPage {
  readonly page: Page;
  readonly contentArea: Locator;
  readonly listViewButton: Locator;
  readonly firstProductLink: Locator;
  readonly addToCartButton: Locator;
  readonly sortDropdown: Locator;
  readonly itemPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contentArea = page.locator('.content');
    this.listViewButton = page.locator('a[data-type="list"]').first();
    this.firstProductLink = page.locator('.product a').first();
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.sortDropdown = page.locator('select.orderby'); 
    this.itemPrices = page.locator('.product .price'); 
  }

  async verifyContentDisplays() {
    await expect(this.contentArea).toBeVisible();
  }

  async switchToListView() {
    await this.listViewButton.click({ force: true });
  }

  async addFirstItemToCart() {
    await this.firstProductLink.click();
    await this.addToCartButton.click();
    await this.page.waitForTimeout(2000); 
  }

  async addMultipleItemsToCart(amount: number) {
    const addButtons = await this.page.locator('.add_to_cart_button').all();
    for (let i = 0; i < amount; i++) {
      await addButtons[i].click();
      await this.page.waitForTimeout(1500); 
    }
  }

  async sortItemsByPrice(order: 'price' | 'price-desc') {
    await this.sortDropdown.selectOption(order);
    await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyItemsSortedByPrice(order: 'asc' | 'desc') {
    const rawPrices = await this.itemPrices.allInnerTexts();
    const actualPrices = rawPrices.map(priceString => {
      const matches = priceString.match(/[\d,]+(?:\.\d+)?/g);
      if (matches && matches.length > 0) {
        const lastMatch = matches[matches.length - 1];
        return parseFloat(lastMatch.replace(/,/g, ''));
      }
      return 0; 
    });

    const expectedPrices = [...actualPrices].sort((a, b) => {
      return order === 'asc' ? a - b : b - a;
    });

    expect(actualPrices).toEqual(expectedPrices);
  }

  async clickFirstProductToViewDetail() {
    await this.page.locator('.product-content-image').first().click();
  }
}