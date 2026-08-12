import { test } from '../fixtures/authFixture';
import { MyAccountPage } from '../pages/MyAccountPage';
import billingData from '../data/billing.json'; 

test('TC_05 - Verify orders appear in order history', async ({ 
  loggedInPage, 
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(120000); 

  const myAccountPage = new MyAccountPage(loggedInPage);

  
  for (let i = 1; i <= 2; i++) {
    console.log(`Đang tiến hành đặt đơn hàng thứ ${i} qua luồng POM...`);

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