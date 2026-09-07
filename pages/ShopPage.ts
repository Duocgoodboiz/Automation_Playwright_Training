import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShopPage extends BasePage {
  readonly contentArea: Locator;
  readonly listViewButton: Locator;
  readonly firstProductLink: Locator;
  readonly addToCartButton: Locator;
  readonly sortDropdown: Locator;
  readonly itemPrices: Locator;

  constructor(page: Page) {
    super(page);
    
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
    await this.listViewButton.evaluate((node: HTMLElement) => node.click());
  }

  async addFirstItemToCart() {
    await this.page.waitForLoadState('networkidle');
    const firstAddBtn = this.page.locator('.add_to_cart_button').first();
    await firstAddBtn.waitFor({ state: 'visible' });
    await firstAddBtn.scrollIntoViewIfNeeded();
    await firstAddBtn.click({ force: true });
    
    await expect(firstAddBtn).toHaveClass(/added/, { timeout: 15000 });
  }

  async addMultipleItemsToCart(amount: number) {
    await this.page.waitForLoadState('networkidle');
    const addButtons = this.page.locator('.add_to_cart_button');
    for (let i = 0; i < amount; i++) {
      const targetBtn = addButtons.nth(i);
      await targetBtn.waitFor({ state: 'visible' });
      await targetBtn.scrollIntoViewIfNeeded();
      await targetBtn.click({ force: true });
      
      await expect(targetBtn).toHaveClass(/added/, { timeout: 15000 });
    }
  }

  async sortItemsByPrice(order: 'price' | 'price-desc') {
    await this.sortDropdown.selectOption(order);
    
    await this.waitForBlockUIHidden(60000);
    
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
    const firstImage = this.page.locator('.product-content-image').first();
    await firstImage.waitFor({ state: 'visible' });
    await firstImage.scrollIntoViewIfNeeded();
    await firstImage.click();
  }
}