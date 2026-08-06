import { test } from '../fixtures/authFixture';

test('TC_08 - Verify users can clear the cart', async ({ 
  homePage, 
  shopPage, 
  cartPage 
}) => {
  // Cấp đủ thời gian vì thao tác xóa từng item có thể mất nhiều thời gian load
  test.setTimeout(60000);

  // 1. Đi đến Shop, chọn chế độ List và ném thử 2 sản phẩm vào giỏ để lát nữa xóa
  await homePage.goToShop();
  await shopPage.switchToListView();
  await shopPage.addMultipleItemsToCart(2);
  
  // 2. Chuyển vào trang Giỏ hàng
  await cartPage.page.goto('/cart'); 
  await cartPage.verifyItemInCart();

  // 3. Thực hiện vòng lặp Click xóa toàn bộ sản phẩm
  await cartPage.clearAllItems();

  // 4. Xác minh giỏ hàng đã trống trơn
  await cartPage.verifyCartIsEmpty();
});