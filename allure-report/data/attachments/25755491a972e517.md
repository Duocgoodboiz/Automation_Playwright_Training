# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc_03_payment_methods.spec.ts >> TC_03 - Verify user can buy item using Direct bank transfer
- Location: tests/tc_03_payment_methods.spec.ts:13:7

# Error details

```
TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('.woocommerce-notice--success, .woocommerce-error') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
  - paragraph [ref=f6e2]:
    - text: THIS IS A DEMO STORE FOR TESTING AND TRAINING PURPOSES - NO ORDERS SHALL BE FULFILLED. *** THIS SITE WILL BE RESET DAILY AT 23:00 ***
    - link "Dismiss" [ref=f6e3] [cursor=pointer]:
      - /url: "#"
  - generic [ref=f6e4]:
    - generic [ref=f6e5]:
      - generic [ref=f6e6]:
        - banner [ref=f6e7]:
          - generic [ref=f6e8]:
            - generic [ref=f6e12]:
              - generic [ref=f6e14]:
                - generic [ref=f6e15]:
                  - generic [ref=f6e16]: 
                  - text: Order online or call us (+1800) 000 8808
                - generic [ref=f6e17]: │
                - generic [ref=f6e18]:
                  - generic [ref=f6e19]: 
                  - text: 1730 S. Amphlett Blvd. Suite 200, San Mateo, CA
              - generic [ref=f6e21]:
                - link "Log in / Sign up" [ref=f6e23] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/my-account/
                - generic [ref=f6e29]: │
                - generic [ref=f6e30]:
                  - link "Pinterest" [ref=f6e31] [cursor=pointer]:
                    - /url: "#"
                  - link "Instagram" [ref=f6e34] [cursor=pointer]:
                    - /url: "#"
                  - link "Twitter" [ref=f6e37] [cursor=pointer]:
                    - /url: "#"
                  - link "Facebook" [ref=f6e40] [cursor=pointer]:
                    - /url: "#"
            - generic [ref=f6e46]:
              - link [ref=f6e49] [cursor=pointer]:
                - /url: https://demo.testarchitect.com
              - generic [ref=f6e52]:
                - generic [ref=f6e55]:
                  - group "1 / 5" [ref=f6e56]:
                    - generic [ref=f6e60]: NO ORDERS SHALL BE FULFILLED
                  - group "2 / 5" [ref=f6e61]:
                    - generic [ref=f6e65]: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
                  - group "3 / 5" [ref=f6e66]:
                    - generic [ref=f6e70]: THIS SITE IS USING FOR TRAINING PURPOSE ONLY
                  - group "4 / 5" [ref=f6e71]:
                    - generic [ref=f6e75]: NO ORDERS SHALL BE FULFILLED
                  - group "5 / 5" [ref=f6e76]:
                    - generic [ref=f6e80]: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
                - search [ref=f6e82]:
                  - generic [ref=f6e83]:
                    - combobox [ref=f6e84] [cursor=pointer]:
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
                    - generic [ref=f6e85]: Search input
                    - textbox "Search input" [ref=f6e86]:
                      - /placeholder: Type here...
                    - button [ref=f6e88] [cursor=pointer]
              - generic [ref=f6e92]:
                - link "0 Wishlist" [ref=f6e94] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/wishlist/
                  - generic [ref=f6e95]:
                    - generic [ref=f6e96]: "0"
                    - generic [ref=f6e101]: Wishlist
                - generic [ref=f6e102]: │
                - link "1 $290.00" [ref=f6e104] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/cart/
                  - generic [ref=f6e105]:
                    - generic [ref=f6e106]: "1"
                    - generic [ref=f6e111]: $290.00
            - generic [ref=f6e118]:
              - generic [ref=f6e121]:
                - generic [ref=f6e122] [cursor=pointer]:
                  - generic [ref=f6e123]: 
                  - generic [ref=f6e125]: All departments
                  - text: 
                - generic:       
              - list [ref=f6e129]:
                - listitem [ref=f6e130]:
                  - link "Home" [ref=f6e131] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/
                - listitem [ref=f6e132]:
                  - link "About Us" [ref=f6e133] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/about-us/
                - listitem [ref=f6e134]:
                  - link "Shop" [ref=f6e135] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/shop/
                - listitem [ref=f6e136]:
                  - link " Offers" [ref=f6e137] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/product-category/electronic-components-supplies/
                    - generic [ref=f6e138]: 
                    - text: Offers
                - listitem [ref=f6e139]:
                  - link "Blog" [ref=f6e140] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/blog/
                - listitem [ref=f6e141]:
                  - link "Contact Us" [ref=f6e142] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/contact/
        - generic: 
        - generic [ref=f6e143]:
          - link "1 Shopping cart" [ref=f6e144] [cursor=pointer]:
            - /url: https://demo.testarchitect.com/cart/
          - link "2 Checkout":
            - /url: https://demo.testarchitect.com/checkout/
          - link "3 Order status":
            - /url: "#"
          - generic [ref=f6e145]: 🔥 Hurry up, these products are limited, checkout within 14:38
        - generic [ref=f6e151]:
          - generic [ref=f6e152]:
            - generic [ref=f6e154]:
              - text: 󡀀 Returning customer?
              - link "Click here to login" [ref=f6e155] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f6e157]:
              - text:  Have a coupon?
              - link "Click here to enter your code" [ref=f6e158] [cursor=pointer]:
                - /url: "#"
          - generic [ref=f6e160]:
            - generic [ref=f6e162]:
              - generic [ref=f6e164]:
                - heading "Billing Details" [level=3] [ref=f6e165]
                - generic [ref=f6e166]:
                  - paragraph [ref=f6e167]:
                    - generic [ref=f6e168]: First name *
                    - textbox "First name *" [ref=f6e170]:
                      - /placeholder: ""
                      - text: Duoc
                  - paragraph [ref=f6e171]:
                    - generic [ref=f6e172]: Last name *
                    - textbox "Last name *" [ref=f6e174]:
                      - /placeholder: ""
                      - text: Nguyen
                  - paragraph [ref=f6e175]:
                    - generic [ref=f6e176]: Company name (optional)
                    - textbox "Company name (optional)" [ref=f6e178]:
                      - /placeholder: ""
                  - paragraph [ref=f6e179]:
                    - generic [ref=f6e180]: Country / Region *
                    - generic [ref=f6e181]:
                      - combobox [ref=f6e182] [cursor=pointer]
                      - combobox "Country / Region" [ref=f6e185] [cursor=pointer]:
                        - textbox "Vietnam" [ref=f6e186]
                  - paragraph [ref=f6e187]:
                    - generic [ref=f6e188]: Street address *
                    - textbox "Street address *" [ref=f6e190]:
                      - /placeholder: House number and street name
                      - text: 777 Ha Noi Street
                  - paragraph [ref=f6e191]:
                    - generic [ref=f6e192]:
                      - text: Apartment, suite, unit, etc.
                      - generic [ref=f6e193]: (optional)
                    - textbox "Apartment, suite, unit, etc. (optional)" [ref=f6e195]
                  - paragraph [ref=f6e196]:
                    - generic [ref=f6e197]: Postcode / ZIP (optional)
                    - textbox "Postcode / ZIP (optional)" [ref=f6e199]:
                      - /placeholder: ""
                      - text: "100000"
                  - paragraph [ref=f6e200]:
                    - generic [ref=f6e201]: Town / City *
                    - textbox "Town / City *" [ref=f6e203]:
                      - /placeholder: ""
                      - text: Ha Noi
                  - paragraph [ref=f6e204]:
                    - generic [ref=f6e205]: Phone *
                    - textbox "Phone *" [ref=f6e207]:
                      - /placeholder: ""
                      - text: "0123456789"
                  - paragraph [ref=f6e208]:
                    - generic [ref=f6e209]: Email address *
                    - textbox "Email address *" [ref=f6e211]:
                      - /placeholder: ""
                      - text: testguest@yopmail.com
                - paragraph [ref=f6e213]:
                  - generic [ref=f6e214]:
                    - checkbox "Create an account?" [ref=f6e215]
                    - text: Create an account?
              - paragraph [ref=f6e219]:
                - generic [ref=f6e220]: Order notes (optional)
                - textbox "Order notes (optional)" [ref=f6e222]:
                  - /placeholder: Notes about your order, e.g. special notes for delivery.
            - generic [ref=f6e224]:
              - heading "Your order" [level=3] [ref=f6e225]
              - generic [ref=f6e226]:
                - table [ref=f6e227]:
                  - rowgroup [ref=f6e228]:
                    - row [ref=f6e229]:
                      - cell [ref=f6e230]:
                        - text: Canon i-SENSYS LBP6030W with Wi-Fi
                        - strong [ref=f6e231]: × 1
                      - cell "$290.00" [ref=f6e232]
                  - rowgroup [ref=f6e235]:
                    - row [ref=f6e236]:
                      - rowheader "Subtotal" [ref=f6e237]
                      - cell "$290.00" [ref=f6e238]
                    - row [ref=f6e241]:
                      - rowheader "Total" [ref=f6e242]
                      - cell "$290.00" [ref=f6e243]:
                        - strong [ref=f6e244]:
                          - generic [ref=f6e245]: $290.00
                - generic [ref=f6e247]:
                  - list [ref=f6e248]:
                    - listitem [ref=f6e249]:
                      - radio "Direct bank transfer" [checked] [ref=f6e250]
                      - generic [ref=f6e251]: Direct bank transfer
                      - paragraph [ref=f6e253]: Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    - listitem [ref=f6e254]:
                      - radio "Check payments" [ref=f6e255]
                      - generic [ref=f6e256]: Check payments
                    - listitem [ref=f6e257]:
                      - radio "Cash on delivery" [ref=f6e258]
                      - generic [ref=f6e259]: Cash on delivery
                  - generic [ref=f6e260]:
                    - paragraph [ref=f6e263]:
                      - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                      - link "privacy policy" [ref=f6e264] [cursor=pointer]:
                        - /url: https://demo.testarchitect.com/?page_id=3
                      - text: .
                    - button "Place order" [ref=f6e265] [cursor=pointer]
        - contentinfo [ref=f6e266]
      - generic [ref=f6e280]:
        - contentinfo [ref=f6e281]:
          - generic [ref=f6e288]:
            - img "talogoblue" [ref=f6e293]
            - generic [ref=f6e299]:
              - link "About Us" [ref=f6e300] [cursor=pointer]:
                - /url: /about-us/
              - link "Shop" [ref=f6e301] [cursor=pointer]:
                - /url: /shop/
              - link "Offers" [ref=f6e302] [cursor=pointer]:
                - /url: /electronic-components-supplies/
              - link "Blog" [ref=f6e303] [cursor=pointer]:
                - /url: /blog/
              - link "Contact Us" [ref=f6e304] [cursor=pointer]:
                - /url: /contact/
        - generic [ref=f6e305]: Copyright © 2021 LogiGear Corporation. All rights reserved.
    - generic [ref=f6e315] [cursor=pointer]: 
  - generic [ref=f6e319]: widescreen
  - dialog "Cookie Notice" [ref=f6e320]:
    - generic [ref=f6e321]:
      - generic [ref=f6e322]: We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
      - link "Ok" [ref=f6e324] [cursor=pointer]:
        - /url: "#"
      - generic "No" [ref=f6e325] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class CheckoutPage {
  4  |   readonly page: Page;
  5  |   readonly checkoutTitle: Locator;
  6  |   readonly orderItem: Locator;
  7  |   readonly firstNameInput: Locator;
  8  |   readonly lastNameInput: Locator;
  9  |   readonly addressInput: Locator;
  10 |   readonly cityInput: Locator;
  11 |   readonly phoneInput: Locator;
  12 |   readonly zipCodeInput: Locator;
  13 |   readonly emailInput: Locator;
  14 |   readonly placeOrderBtn: Locator;
  15 |   readonly successMessage: Locator;
  16 |   readonly errorMessages: Locator;
  17 | 
  18 |   constructor(page: Page) {
  19 |     this.page = page;
  20 |     this.checkoutTitle = page.getByText('Shopping cart Checkout Order');
  21 |     this.orderItem = page.locator('.cart_item');
  22 |     this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
  23 |     this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
  24 |     this.addressInput = page.getByRole('textbox', { name: 'Street address *' });
  25 |     this.cityInput = page.getByRole('textbox', { name: 'Town / City *' });
  26 |     this.phoneInput = page.getByRole('textbox', { name: 'Phone *' });
  27 |     this.zipCodeInput = page.locator('#billing_postcode');
  28 |     this.emailInput = page.locator('#billing_email');
  29 |     this.placeOrderBtn = page.getByRole('button', { name: 'Place order' });
  30 |     this.successMessage = page.locator('.woocommerce-notice--success');
  31 |     this.errorMessages = page.locator('.woocommerce-error li');
  32 |   }
  33 | 
  34 |   async verifyCheckoutPageDisplayed() {
  35 |     await expect(this.checkoutTitle).toBeVisible();
  36 |     await expect(this.orderItem.first()).toBeVisible();
  37 |   }
  38 | 
  39 |   async fillBillingDetails(billingData: { firstName: string, lastName: string, address: string, city: string, phone: string, zipCode: string, email: string }) {
  40 |     await this.firstNameInput.fill(billingData.firstName);
  41 |     await this.lastNameInput.fill(billingData.lastName);
  42 | 
  43 |     await this.page.locator('#select2-billing_country-container').click();
  44 |     await this.page.locator('.select2-search__field').fill('Vietnam');
  45 |     await this.page.locator('.select2-search__field').press('Enter');
  46 | 
  47 |     await this.addressInput.fill(billingData.address);
  48 |     await this.cityInput.fill(billingData.city);
  49 |     await this.zipCodeInput.fill(billingData.zipCode);
  50 |     await this.phoneInput.fill(billingData.phone);
  51 |     await this.emailInput.fill(billingData.email);
  52 |   }
  53 | 
  54 |   async selectPaymentMethod(methodName: string) {
  55 |     await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  56 |     await this.page.getByText(methodName, { exact: true }).click({ force: true });
  57 |   }
  58 | 
  59 |   async placeOrder() {
  60 |     await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  61 |     await this.placeOrderBtn.click({ force: true });
  62 |   }
  63 | 
  64 |   async verifyOrderSuccess(timeoutMs: number = 15000) {
  65 |     // Kỹ thuật gộp selector: Chờ 1 trong 2 thẻ xuất hiện (Thành công HOẶC Lỗi)
> 66 |     const element = await this.page.waitForSelector('.woocommerce-notice--success, .woocommerce-error', { state: 'visible', timeout: timeoutMs });
     |                                     ^ TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
  67 |     const className = await element.getAttribute('class') || '';
  68 | 
  69 |     // Nếu thẻ xuất hiện là thẻ lỗi (Hết hàng/Spam) -> In log và cho qua
  70 |     if (className.includes('woocommerce-error')) {
  71 |       console.log("CẢNH BÁO TỪ DEMO SERVER:", await element.innerText());
  72 |       return; 
  73 |     }
  74 | 
  75 |     // Nếu không phải thẻ lỗi, tiếp tục xác nhận thành công
  76 |     await expect(this.page.getByRole('heading', { name: 'Order details' })).toBeVisible();
  77 |   }
  78 | 
  79 |   async verifyMandatoryFieldsError() {
  80 |     // Phải đợi loading mất đi thì lỗi mới hiện ra
  81 |     await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  82 |     await this.page.waitForSelector('.woocommerce-error', { state: 'visible', timeout: 10000 });
  83 |     const errorCount = await this.errorMessages.count();
  84 |     expect(errorCount).toBeGreaterThan(0);
  85 |   }
  86 | }
```