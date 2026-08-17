import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json'; 

test('TC_05 - Verify orders appear in order history', async ({ 
  myAccountPage,
  loggedInPage, 
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(180000);

  await myAccountPage.registerRandomAccount();

  for (let i = 1; i <= 2; i++) {
    console.log(`Processing order number ${i} via POM...`);

    await homePage.goToShop();
    await shopPage.addFirstItemToCart();
    
    await cartPage.page.goto('/cart');
    await cartPage.goToCheckout();
    
    await checkoutPage.verifyCheckoutPageDisplayed();
    await checkoutPage.fillBillingDetails(billingData.validUser); 
    await checkoutPage.placeOrder();

    await checkoutPage.verifyOrderSuccess();
  }

  await loggedInPage.goto('/my-account');

  await myAccountPage.goToOrdersTab();

  await myAccountPage.verifyOrdersAreDisplayed(2);
});