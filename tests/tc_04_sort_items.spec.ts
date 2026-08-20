import { test } from '../fixtures/authFixture';

test.fixme('TC_04 - Verify users can sort items by price', async ({ homePage, shopPage }) => {
  test.setTimeout(120000);

  await homePage.goToShop();
  await shopPage.switchToListView();

  await shopPage.sortItemsByPrice('price');
  await shopPage.verifyItemsSortedByPrice('asc');

  await shopPage.sortItemsByPrice('price-desc');
  await shopPage.verifyItemsSortedByPrice('desc');
});