import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';

test('TC_01 - Verify users can buy an item successfully (POM version)', async ({ 
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(60000); 

  await homePage.goToShop();

  await shopPage.verifyContentDisplays();
  await shopPage.switchToListView();
  await shopPage.verifyContentDisplays();
  await shopPage.addFirstItemToCart();
  
  await cartPage.page.goto('/cart'); 
  await cartPage.verifyItemInCart();
  await cartPage.goToCheckout();

  await checkoutPage.verifyCheckoutPageDisplayed();
  
  await checkoutPage.fillBillingDetails(billingData.validUser); 
  await checkoutPage.placeOrder();
  
  await checkoutPage.verifyOrderSuccess();
});