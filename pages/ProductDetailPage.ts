import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly reviewsTab: Locator;
  readonly starRating: Locator;
  readonly reviewTextbox: Locator;
  readonly submitBtn: Locator;
  readonly reviewList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reviewsTab = page.getByRole('link', { name: /Reviews/i });
    this.starRating = page.locator('.star-5'); 
    this.reviewTextbox = page.getByRole('textbox', { name: /Your review/i });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.reviewList = page.locator('#comments .commentlist'); 
  }

  async goToReviewsTab() {
  await this.reviewsTab.click({ force: true });
  await this.page.waitForSelector('#comments', { state: 'visible', timeout: 30000 });
}
  async submitReview(reviewText: string) {
    await this.page.locator('.stars a.star-5').click({ force: true });
    await this.reviewTextbox.click({ force: true }); 
    await this.reviewTextbox.fill(reviewText);
    await this.submitBtn.click({ force: true });
  }

  async verifyReviewDisplays(expectedText: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page.locator('body')).toContainText(expectedText, { timeout: 15000 });
  }
}