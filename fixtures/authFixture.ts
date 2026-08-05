import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type MyFixtures = {
  loggedInPage: Page;
  homePage: HomePage;
  shopPage: ShopPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

const USER_PREFIX = 'testuser_';

export const test = base.extend<MyFixtures>({
  
  loggedInPage: async ({ page }, use) => {
    await page.goto('/'); 
    await page.getByRole('link', { name: 'Log in / Sign up' }).click();
    const randomEmail = `${USER_PREFIX}${Date.now()}@gmail.com`;
    await page.locator('#reg_email').fill(randomEmail);
    await page.getByRole('button', { name: 'Register' }).click();
    await page.waitForURL('**/my-account/**'); 
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
});

export { expect } from '@playwright/test';