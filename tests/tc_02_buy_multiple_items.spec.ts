import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';

test('TC_02 - Verify users can buy multiple items successfully', async ({ 
  myAccountPage,
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(150000);

  await homePage.goto();
  await myAccountPage.registerRandomAccount();

  await homePage.goToShop();
  await shopPage.switchToListView();

  await shopPage.addMultipleItemsToCart(3);

  await cartPage.goToCart();
  await cartPage.goToCheckout();

  await checkoutPage.verifyCheckoutPageDisplayed();
  
  const validUserData: BillingInfo = billingData.validUser; 
  await checkoutPage.fillBillingDetails(validUserData); 
  
  await checkoutPage.placeOrder();
  
  await checkoutPage.verifyOrderSuccess();
});