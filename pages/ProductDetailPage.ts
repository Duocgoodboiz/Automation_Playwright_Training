import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly reviewsTab: Locator;
  readonly starRating: Locator;
  readonly reviewTextbox: Locator;
  readonly nameTextbox: Locator;
  readonly emailTextbox: Locator;
  readonly submitBtn: Locator;
  readonly reviewList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reviewsTab = page.getByRole('link', { name: /Reviews/i });
    this.starRating = page.locator('.stars a.star-5'); 
    this.reviewTextbox = page.getByRole('textbox', { name: /Your review/i });
    this.nameTextbox = page.getByRole('textbox', { name: /Name/i });
    this.emailTextbox = page.getByRole('textbox', { name: /Email/i }); 
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.reviewList = page.locator('#comments .commentlist'); 
  }

  async goToReviewsTab() {
    await this.reviewsTab.scrollIntoViewIfNeeded();
    await this.reviewsTab.click();
    
    await this.page.waitForSelector('#review_form_wrapper', { state: 'visible', timeout: 30000 });
  }

  async submitReview(reviewText: string) {
    await this.starRating.scrollIntoViewIfNeeded();
    await this.starRating.click();

    await this.reviewTextbox.fill(reviewText);

    await this.nameTextbox.fill('John Doe');
    await this.emailTextbox.fill('john.doe@automation.com');
    
    await this.submitBtn.click();

    await this.page.waitForLoadState('networkidle', { timeout: 60000 });
  }

  async verifyReviewDisplays(expectedText: string) {
    await expect(this.reviewList).toContainText(expectedText, { timeout: 60000 });
  }
}