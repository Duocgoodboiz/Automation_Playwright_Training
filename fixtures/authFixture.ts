import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductDetailPage } from '../pages/ProductDetailPage'; 
import { MyAccountPage } from '../pages/MyAccountPage'; 

type MyFixtures = {
  homePage: HomePage;
  shopPage: ShopPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  productDetailPage: ProductDetailPage; 
  myAccountPage: MyAccountPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  productDetailPage: async ({ page }, use) => {
    await use(new ProductDetailPage(page));
  },
  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },
});

export { expect } from '@playwright/test';