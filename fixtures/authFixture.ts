import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductDetailPage } from '../pages/ProductDetailPage'; 
import { MyAccountPage } from '../pages/MyAccountPage'; 

type MyFixtures = {
  loggedInPage: Page;
  homePage: HomePage;
  shopPage: ShopPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  productDetailPage: ProductDetailPage; 
  myAccountPage: MyAccountPage;
};

export const test = base.extend<MyFixtures>({
  
  loggedInPage: async ({ page }, use) => {
    await page.goto('/'); 
    await use(page);
  },

  homePage: async ({ loggedInPage }, use) => {
    await use(new HomePage(loggedInPage));
  },
  shopPage: async ({ loggedInPage }, use) => {
    await use(new ShopPage(loggedInPage));
  },
  cartPage: async ({ loggedInPage }, use) => {
    await use(new CartPage(loggedInPage));
  },
  checkoutPage: async ({ loggedInPage }, use) => {
    await use(new CheckoutPage(loggedInPage));
  },
  productDetailPage: async ({ loggedInPage }, use) => {
    await use(new ProductDetailPage(loggedInPage));
  },
  myAccountPage: async ({ loggedInPage }, use) => {
    await use(new MyAccountPage(loggedInPage));
  },
});

export { expect } from '@playwright/test';