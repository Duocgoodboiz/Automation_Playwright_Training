import { test } from '../fixtures/authFixture';

test('TC_10 - Verify users can post a review', async ({ 
  homePage, 
  shopPage, 
  productDetailPage 
}) => {
  test.setTimeout(60000);

  await homePage.goToShop();

  await shopPage.clickFirstProductToViewDetail();

  await productDetailPage.goToReviewsTab();

  const uniqueReview = `Sản phẩm dùng rất gud! Automation check: ${Date.now()}`;

  await productDetailPage.submitReview(uniqueReview);

  await productDetailPage.verifyReviewDisplays(uniqueReview);
});