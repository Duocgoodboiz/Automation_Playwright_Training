import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';

const paymentMethods = [
  'Direct bank transfer', 
  'Cash on delivery'
];

for (const method of paymentMethods) {
  
  test(`TC_03 - Verify user can buy item using ${method}`, async ({ 
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
    
    const validUserData: BillingInfo = billingData.validUser;
    await checkoutPage.fillBillingDetails(validUserData); 

    await checkoutPage.selectPaymentMethod(method);

    await checkoutPage.placeOrder();
    await checkoutPage.verifyOrderSuccess();
  });
  
}