import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
  readonly reviewsTab: Locator;
  readonly reviewFormWrapper: Locator;
  readonly starRating: Locator;
  readonly reviewTextbox: Locator;
  readonly nameTextbox: Locator;
  readonly emailTextbox: Locator;
  readonly submitBtn: Locator;
  readonly reviewList: Locator;

  constructor(page: Page) {
    super(page);
    
    this.reviewsTab = page.getByRole('link', { name: /Reviews/i });
    this.reviewFormWrapper = page.locator('#review_form_wrapper');
    this.starRating = page.locator('.stars a.star-5'); 
    this.reviewTextbox = page.getByRole('textbox', { name: /Your review/i });
    this.nameTextbox = page.getByRole('textbox', { name: /Name/i });
    this.emailTextbox = page.getByRole('textbox', { name: /Email/i }); 
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.reviewList = page.locator('#comments .commentlist'); 
  }

  async goToReviewsTab() {
    await this.reviewsTab.click();
    await expect(this.reviewFormWrapper).toBeVisible({ timeout: 30000 });
  }

  async submitReview(reviewText: string, name: string = 'John Doe', email: string = 'john.doe@automation.com') {
    await this.starRating.click();
    await this.reviewTextbox.fill(reviewText);
    await this.nameTextbox.fill(name);
    await this.emailTextbox.fill(email);
    
    await this.submitBtn.click();
  }

  async verifyReviewDisplays(expectedText: string) {
    await expect(this.reviewList).toContainText(expectedText, { timeout: 60000 });
  }
}