import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import billingData from '../data/billing.json';
import { BillingInfo } from '../types/BillingInfo';

test('TC_06 - Verify users try to buy an item without logging in (As a guest)', async ({ page }) => {
  test.setTimeout(120000); 

  const homePage = new HomePage(page);
  const shopPage = new ShopPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.goto();

  await homePage.goToShop();
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