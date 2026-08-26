import { BillingInfo } from '../types/BillingInfo';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export async function executeCheckoutFlow(
  homePage: HomePage,
  shopPage: ShopPage,
  cartPage: CartPage,
  checkoutPage: CheckoutPage,
  billingData: BillingInfo
) {
  await homePage.goToShop();
  await shopPage.addFirstItemToCart();

  await shopPage.goToCart();
  await cartPage.goToCheckout();

  await checkoutPage.verifyCheckoutPageDisplayed();
  await checkoutPage.fillBillingDetails(billingData);
  await checkoutPage.placeOrder();

  await checkoutPage.verifyOrderSuccess();
}