import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';

test('TC_06 - Verify users try to buy an item without logging in (As a guest)', async ({ 
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(120000); 


  await homePage.goToShop();
  await shopPage.verifyContentDisplays();
  await shopPage.addFirstItemToCart();

  await shopPage.goToCart(); 
  await cartPage.verifyItemInCart();
  await cartPage.goToCheckout();

  await checkoutPage.verifyCheckoutPageDisplayed();
  
  const validUserData: BillingInfo = billingData.validUser;
  await checkoutPage.fillBillingDetails(validUserData); 
  
  await checkoutPage.placeOrder();
  
  await checkoutPage.verifyOrderSuccess();
});