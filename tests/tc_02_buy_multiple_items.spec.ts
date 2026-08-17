import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';

test('TC_02 - Verify users can buy multiple items successfully', async ({ 
  myAccountPage,
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(150000);

  await myAccountPage.registerRandomAccount();

  await homePage.goToShop();
  await shopPage.switchToListView();

  await shopPage.addMultipleItemsToCart(3);

  await cartPage.page.goto('/cart'); 
  await cartPage.goToCheckout();

  await checkoutPage.verifyCheckoutPageDisplayed();
  await checkoutPage.fillBillingDetails(billingData.validUser); 
  await checkoutPage.placeOrder();
  
  await checkoutPage.verifyOrderSuccess();
});