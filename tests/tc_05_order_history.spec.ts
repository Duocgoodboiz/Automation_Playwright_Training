import { test } from '../fixtures/authFixture';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';
import { executeCheckoutFlow } from '../flows/checkout.flow';

test('TC_05 - Verify orders appear in order history', async ({ 
  myAccountPage,
  homePage, 
  shopPage, 
  cartPage, 
  checkoutPage 
}) => {
  test.setTimeout(180000);

  await test.step('Register a random new account', async () => {
    await myAccountPage.registerRandomAccount();
  });

  const validUserData: BillingInfo = billingData.validUser;

  await test.step('Processing order number 1 via Flow', async () => {
    await executeCheckoutFlow(homePage, shopPage, cartPage, checkoutPage, validUserData);
  });

  await test.step('Processing order number 2 via Flow', async () => {
    await executeCheckoutFlow(homePage, shopPage, cartPage, checkoutPage, validUserData);
  });

  await test.step('Navigate to My Account and verify order history', async () => {
    await checkoutPage.goToMyAccount();
    await myAccountPage.goToOrdersTab();
    await myAccountPage.verifyOrdersAreDisplayed(2);
  });
});