import { test } from '../fixtures/authFixture';
import { expect } from '@playwright/test';

test('TC_08 - Verify users can clear the cart', async ({ 
  homePage, 
  shopPage, 
  cartPage 
}) => {
  test.fail(true, 'Bug: Clicking OK on the confirmation popup does not clear the shopping cart.');

  test.setTimeout(120000);

  await homePage.goToShop();
  await shopPage.addFirstItemToCart();

  await shopPage.goToCart(); 
  await cartPage.verifyItemInCart();

  await cartPage.clearAllItems();

  await cartPage.verifyCartIsEmpty();
});