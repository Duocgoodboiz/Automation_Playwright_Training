import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';

test('TC_05 - Verify orders appear in order history', async ({ 
  page,
  myAccountPage,
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(180000);

  await homePage.goto();
  await myAccountPage.registerRandomAccount();

  const validUserData: BillingInfo = billingData.validUser;

  for (let i = 1; i <= 2; i++) {
    console.log(`Processing order number ${i} via POM...`);

    await homePage.goToShop();
    await shopPage.addFirstItemToCart();
    
    await cartPage.goToCart();
    await cartPage.goToCheckout();
    
    await checkoutPage.verifyCheckoutPageDisplayed();
    
    await checkoutPage.fillBillingDetails(validUserData); 
    await checkoutPage.placeOrder();

    await checkoutPage.verifyOrderSuccess();
  }

  await page.goto('/my-account');

  await myAccountPage.goToOrdersTab();

  await myAccountPage.verifyOrdersAreDisplayed(2);
});