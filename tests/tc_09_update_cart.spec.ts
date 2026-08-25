import { test } from '../fixtures/authFixture';

test('TC_09 - Verify users can update quantity of product in cart', async ({ 
  homePage, 
  shopPage, 
  cartPage 
}) => {
  test.setTimeout(120000); 

  await homePage.goToShop();
  await shopPage.addFirstItemToCart();
  await cartPage.page.goto('/cart');

  await cartPage.verifyQuantityAndSubtotal('1');

  await cartPage.changeQuantity('plus');
  await cartPage.verifyQuantityAndSubtotal('2');

  await cartPage.changeQuantity('input', '4');
  await cartPage.verifyQuantityAndSubtotal('4');

  await cartPage.changeQuantity('minus');
  await cartPage.verifyQuantityAndSubtotal('3');
});