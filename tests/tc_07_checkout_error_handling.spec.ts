import { test } from '../fixtures/authFixture';

test('TC_07 - Ensure proper error handling when mandatory fields are blank', async ({ 
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(60000);
  
  await homePage.goToShop();
  await shopPage.switchToListView();
  await shopPage.addFirstItemToCart();
  
  await cartPage.page.goto('/cart'); 
  await cartPage.goToCheckout();
  await checkoutPage.verifyCheckoutPageDisplayed();

  await checkoutPage.firstNameInput.clear();
  
  await checkoutPage.placeOrder();

  await checkoutPage.verifyMandatoryFieldsError();
});