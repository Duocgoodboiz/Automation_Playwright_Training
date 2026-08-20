import { test } from '../fixtures/authFixture';

test('TC_07 - Ensure proper error handling when mandatory fields are blank', async ({ 
  myAccountPage,
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(120000);
  
  await myAccountPage.registerRandomAccount();

  await homePage.goToShop();
  await shopPage.switchToListView();
  await shopPage.addFirstItemToCart();
  
  await shopPage.goToCart();
  await cartPage.goToCheckout();
  await checkoutPage.verifyCheckoutPageDisplayed();

  await checkoutPage.firstNameInput.clear();
  
  await checkoutPage.placeOrder();

  await checkoutPage.verifyMandatoryFieldsError();
});