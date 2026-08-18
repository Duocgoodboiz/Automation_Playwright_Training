import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';

test('TC_01 - Verify users can buy an item successfully (POM version)', async ({ 
  myAccountPage,
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(120000); 

  await homePage.goto();
  await myAccountPage.registerRandomAccount();

  await homePage.goToShop();

  await shopPage.verifyContentDisplays();
  await shopPage.switchToListView();
  await shopPage.verifyContentDisplays();
  await shopPage.addFirstItemToCart();
  
  await cartPage.goToCart(); 
  await cartPage.verifyItemInCart();
  await cartPage.goToCheckout();

  await checkoutPage.verifyCheckoutPageDisplayed();
  
  const validUserData: BillingInfo = billingData.validUser; 
  await checkoutPage.fillBillingDetails(validUserData); 
  
  await checkoutPage.placeOrder();
  
  await checkoutPage.verifyOrderSuccess();
});