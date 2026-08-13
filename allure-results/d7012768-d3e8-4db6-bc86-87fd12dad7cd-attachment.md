# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc_08_clear_cart.spec.ts >> TC_08 - Verify users can clear the cart
- Location: tests/tc_08_clear_cart.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/YOUR SHOPPING CART IS EMPTY/i)
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText(/YOUR SHOPPING CART IS EMPTY/i)

```

```yaml
- paragraph:
  - text: THIS IS A DEMO STORE FOR TESTING AND TRAINING PURPOSES - NO ORDERS SHALL BE FULFILLED. *** THIS SITE WILL BE RESET DAILY AT 23:00 ***
  - link "Dismiss":
    - /url: "#"
- banner:
  - text:  Order online or call us (+1800) 000 8808 │  1730 S. Amphlett Blvd. Suite 200, San Mateo, CA
  - link "Log in / Sign up":
    - /url: https://demo.testarchitect.com/my-account/
    - img
    - text: Log in / Sign up
  - text: │
  - link "Pinterest":
    - /url: "#"
    - img
  - link "Instagram":
    - /url: "#"
    - img
  - link "Twitter":
    - /url: "#"
    - img
  - link "Facebook":
    - /url: "#"
    - img
  - link:
    - /url: https://demo.testarchitect.com
  - group "1 / 5":
    - img
    - text: NO ORDERS SHALL BE FULFILLED
  - group "2 / 5":
    - img
    - text: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
  - group "3 / 5":
    - img
    - text: THIS SITE IS USING FOR TRAINING PURPOSE ONLY
  - group "4 / 5":
    - img
    - text: NO ORDERS SHALL BE FULFILLED
  - group "5 / 5":
    - img
    - text: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
  - search:
    - combobox:
      - option "All categories" [selected]
      - option "3D Glasses/ Virtual Reality Glasses"
      - option "Accessory Bundles"
      - option "Acoustic Components"
      - option "Acoustic Components"
      - option "Active Components"
      - option "Active Components"
      - option "Air-conditioning Installation"
      - option "Antennas for Communications"
      - option "Antennas for Communications"
      - option "Audio"
      - option "Automobiles & Motorcycles"
      - option "Barcode Printer"
      - option "Batteries & Accessories"
      - option "Battery Charger Cases"
      - option "Battery Charger Cases"
      - option "Camera & Photo"
      - option "Camera & Photo Accessories"
      - option "Capacitors"
      - option "Capacitors"
      - option "Car Camera"
      - option "Car Charger"
      - option "Car DVD"
      - option "Car DVRs"
      - option "Car Electrical Appliances"
      - option "Car Electronics"
      - option "Car Video Players"
      - option "Communication Equipment"
      - option "Communication Equipment"
      - option "Computer & Office"
      - option "Consumer Electronics"
      - option "Consumer Electronics"
      - option "Cooling System"
      - option "Creative Watches"
      - option "Creative Watches"
      - option "Digital Watches"
      - option "Dual Display Watches"
      - option "eBook Reader"
      - option "Electrical Ceramics"
      - option "Electrical Ceramics"
      - option "Electrical Contacts and Contact Materials"
      - option "Electrical Contacts and Contact Materials"
      - option "Electronic Accessories & Supplies"
      - option "Electronic Components & Supplies"
      - option "Elevators & Elevator Parts"
      - option "Elevators & Elevator Parts"
      - option "Engine"
      - option "Escalators & Escalator Parts"
      - option "Escalators & Escalator Parts"
      - option "Exhaust & Exhaust Systems"
      - option "Fax machines & Copiers"
      - option "Fiber Optic Equipments"
      - option "Fiber Optic Equipments"
      - option "Fixed Wireless Terminals"
      - option "Fixed Wireless Terminals"
      - option "GPS & Accessories"
      - option "Graph Plotter"
      - option "Insulation Materials & Elements"
      - option "Insulation Materials & Elements"
      - option "Integrated Circuits"
      - option "Keypads & Keyboards"
      - option "Keypads & Keyboards"
      - option "Lapdesks"
      - option "Laptop Accessories"
      - option "Laptop Batteries"
      - option "Marine GPS"
      - option "Mechanical Watches"
      - option "Memory Card"
      - option "Men’s Watches"
      - option "Men’s Watches"
      - option "Mobile Phone Accessories"
      - option "Mobile Phone Batteries"
      - option "Mobile Phone Cables"
      - option "Mobile Phone Part"
      - option "Mobile Phone Touch Panel"
      - option "Motorcycle GPS"
      - option "MP3 / MP4 Player Accessories"
      - option "MP4 Player"
      - option "Office Electronic"
      - option "Optical Drives"
      - option "Other Electronic Accessories"
      - option "Passive Components"
      - option "Passive Components"
      - option "PCB & PCBA"
      - option "PCB & PCBA"
      - option "Phone Bags & Cases"
      - option "Phones & Telecommunications"
      - option "Phones & Telecommunications"
      - option "Pocket Watch Chains"
      - option "Pocket Watch Chains"
      - option "Portable Audio & Video"
      - option "Portable Audio & Video"
      - option "Portable TV"
      - option "Potentiometers"
      - option "Potentiometers"
      - option "Printers"
      - option "Processors"
      - option "Projectors & Accessories"
      - option "Quartz Watches"
      - option "Radar Detectors"
      - option "Radiators & Parts"
      - option "Replacement Parts"
      - option "Resistors"
      - option "Resistors"
      - option "Scanners"
      - option "Screen Protectors"
      - option "Sensors"
      - option "SIM Card & Tools"
      - option "Smart Accessories"
      - option "Smart Electronic Devices"
      - option "Smart Glasses"
      - option "Smart Home Controls"
      - option "Smart Remote Control"
      - option "Smart Watches"
      - option "Smart Watches"
      - option "Speakers"
      - option "Sport & Handheld GPS"
      - option "Tablet Accessories"
      - option "Telecom Parts"
      - option "Telecom Parts"
      - option "Telecommunication Tower"
      - option "Telecommunication Tower"
      - option "Vehicle GPS"
      - option "Walkie Talkie"
      - option "Walkie Talkie"
      - option "Watch Accessories"
      - option "Watch Batteries"
      - option "Watch Batteries"
      - option "Watchbands"
      - option "Watchbands"
      - option "Watches"
      - option "Wearable Devices"
      - option "Women’s Sports Watches"
      - option "Women’s Watches"
      - option "Women’s Watches"
      - option "Wood Series"
      - option "カーエレクトロニクス"
      - option "その他の電子アクセサリー"
      - option "その他の電子アクセサリー"
      - option "携帯電話アクセサリー"
      - option "電子部品および消耗品"
    - text: Search input
    - textbox "Search input":
      - /placeholder: Type here...
    - button:
      - img
  - link "0 Wishlist":
    - /url: https://demo.testarchitect.com/wishlist/
    - img
    - text: 0 Wishlist
  - text: │
  - link "1 $290.00":
    - /url: https://demo.testarchitect.com/cart/
    - img
    - text: 1 $290.00
  - text:  All departments 
  - list:
    - listitem:
      - link "Home":
        - /url: https://demo.testarchitect.com/
    - listitem:
      - link "About Us":
        - /url: https://demo.testarchitect.com/about-us/
    - listitem:
      - link "Shop":
        - /url: https://demo.testarchitect.com/shop/
    - listitem:
      - link " Offers":
        - /url: https://demo.testarchitect.com/product-category/electronic-components-supplies/
    - listitem:
      - link "Blog":
        - /url: https://demo.testarchitect.com/blog/
    - listitem:
      - link "Contact Us":
        - /url: https://demo.testarchitect.com/contact/
- link "1 Shopping cart":
  - /url: https://demo.testarchitect.com/cart/
- link "2 Checkout":
  - /url: https://demo.testarchitect.com/checkout/
- link "3 Order status":
  - /url: "#"
- text: 🔥 Hurry up, these products are limited, checkout within 14:40  Spend $60.00 to get free shipping
- progressbar
- table:
  - rowgroup:
    - row "Product Price Quantity Subtotal":
      - columnheader "Product"
      - columnheader "Price"
      - columnheader "Quantity"
      - columnheader "Subtotal"
  - rowgroup:
    - row "Canon i-SENSYS LBP6030W with Wi-Fi Remove $290.00  Canon i-SENSYS LBP6030W with Wi-Fi quantity 1  $290.00":
      - cell:
        - link:
          - /url: https://demo.testarchitect.com/product/canon-i-sensys-lbp6030w-with-wi-fi/
      - cell "Canon i-SENSYS LBP6030W with Wi-Fi Remove":
        - link "Canon i-SENSYS LBP6030W with Wi-Fi":
          - /url: https://demo.testarchitect.com/product/canon-i-sensys-lbp6030w-with-wi-fi/
        - link "Remove":
          - /url: https://demo.testarchitect.com/cart/?remove_item=167434fa6219316417cd4160c0c5e7d2&_wpnonce=e7f9f560ec
      - cell "$290.00"
      - cell " Canon i-SENSYS LBP6030W with Wi-Fi quantity 1 ":
        - text:  Canon i-SENSYS LBP6030W with Wi-Fi quantity
        - spinbutton "Canon i-SENSYS LBP6030W with Wi-Fi quantity": "1"
        - text: 
      - cell "$290.00"
- link "Enter your promotional code":
  - /url: "#"
- textbox "Coupon code"
- button "OK"
- link "Return to shop":
  - /url: https://demo.testarchitect.com/shop/
- img
- text: Clear shopping cart
- button "Update cart" [disabled]
- heading "Cart totals" [level=2]
- table:
  - rowgroup:
    - row "Subtotal $290.00":
      - rowheader "Subtotal"
      - cell "$290.00"
    - row "Total $290.00":
      - rowheader "Total"
      - cell "$290.00":
        - strong: $290.00
- link "Proceed to checkout":
  - /url: https://demo.testarchitect.com/checkout/
- heading "Payment security" [level=4]
- paragraph: Encryption ensures increased transaction security. SSL technology protects data linked to personal and payment info.
- img "payment methods"
- contentinfo
- contentinfo:
  - img "talogoblue"
  - link "About Us":
    - /url: /about-us/
  - link "Shop":
    - /url: /shop/
  - link "Offers":
    - /url: /electronic-components-supplies/
  - link "Blog":
    - /url: /blog/
  - link "Contact Us":
    - /url: /contact/
- text: Copyright © 2021 LogiGear Corporation. All rights reserved.
- img
- text: 
- img
- text: widescreen
- dialog "Cookie Notice":
  - text: We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
  - link "Ok":
    - /url: "#"
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class CartPage {
  4  |   readonly page: Page;
  5  |   readonly cartItem: Locator;
  6  |   readonly proceedToCheckoutBtn: Locator;
  7  |   readonly clearCartBtn: Locator;
  8  |   readonly emptyCartMessage: Locator;
  9  | 
  10 |   readonly qtyInput: Locator;
  11 |   readonly plusBtn: Locator;
  12 |   readonly minusBtn: Locator;
  13 |   readonly updateCartBtn: Locator;
  14 |   readonly productPrice: Locator;
  15 |   readonly subtotalPrice: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 |     this.cartItem = page.locator('tbody tr.cart_item');
  20 |     this.proceedToCheckoutBtn = page.getByRole('link', { name: 'Proceed to checkout' });
  21 |     this.clearCartBtn = page.getByText('Clear shopping cart', { exact: false }); 
  22 |     this.emptyCartMessage = page.getByText(/YOUR SHOPPING CART IS EMPTY/i); 
  23 |     
  24 |     this.qtyInput = page.locator('input.qty');
  25 |     this.plusBtn = page.locator('.plus');
  26 |     this.minusBtn = page.locator('.minus');
  27 |     this.updateCartBtn = page.getByRole('button', { name: /update cart/i });
  28 |     this.productPrice = page.locator('td.product-price bdi').first();
  29 |     this.subtotalPrice = page.locator('td.product-subtotal bdi').first();
  30 |   }
  31 | 
  32 |   async verifyItemInCart() {
  33 |     await expect(this.cartItem.first()).toBeVisible();
  34 |   }
  35 | 
  36 |   async goToCheckout() {
  37 |     await this.proceedToCheckoutBtn.click();
  38 |   }
  39 | 
  40 |   async clearAllItems() {
  41 |     this.page.once('dialog', async dialog => {
  42 |       console.log(`Hộp thoại xuất hiện với lời nhắn: "${dialog.message()}"`);
  43 |       await dialog.accept(); 
  44 |     });
  45 | 
  46 |     await this.clearCartBtn.click();
  47 |     await this.page.waitForTimeout(2000); 
  48 |   }
  49 | 
  50 |   async verifyCartIsEmpty() {
> 51 |     await expect(this.emptyCartMessage).toBeVisible({ timeout: 15000 });
     |                                         ^ Error: expect(locator).toBeVisible() failed
  52 |   }
  53 | 
  54 |   async getNumericPrice(locator: Locator): Promise<number> {
  55 |     const text = await locator.innerText();
  56 |     return parseFloat(text.replace(/[^\d.-]/g, ''));
  57 |   }
  58 | 
  59 |   async verifyQuantityAndSubtotal(expectedQty: string) {
  60 |     await expect(this.qtyInput.first()).toHaveValue(expectedQty, { timeout: 10000 });
  61 | 
  62 |     const unitPrice = await this.getNumericPrice(this.productPrice);
  63 |     const expectedSubtotal = unitPrice * parseInt(expectedQty);
  64 | 
  65 |     await expect.poll(async () => {
  66 |       return await this.getNumericPrice(this.subtotalPrice);
  67 |     }, { timeout: 15000 }).toBe(expectedSubtotal);
  68 |   }
  69 | 
  70 |   async changeQuantity(action: 'plus' | 'minus' | 'input', value?: string) {
  71 |     if (action === 'plus') {
  72 |       await this.plusBtn.first().click();
  73 |     } else if (action === 'minus') {
  74 |       await this.minusBtn.first().click();
  75 |     } else if (action === 'input' && value) {
  76 |       await this.qtyInput.first().fill(value);
  77 |       await this.qtyInput.first().press('Enter');
  78 |     }
  79 | 
  80 |     await this.updateCartBtn.click({ force: true });
  81 |   }
  82 | }
```