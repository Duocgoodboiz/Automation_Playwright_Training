# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc_02_buy_multiple_items.spec.ts >> TC_02 - Verify users can buy multiple items successfully
- Location: tests/tc_02_buy_multiple_items.spec.ts:4:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.woocommerce-notice--success, .woocommerce-error') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
  - paragraph [ref=f4e2]:
    - text: THIS IS A DEMO STORE FOR TESTING AND TRAINING PURPOSES - NO ORDERS SHALL BE FULFILLED. *** THIS SITE WILL BE RESET DAILY AT 23:00 ***
    - link "Dismiss" [ref=f4e3] [cursor=pointer]:
      - /url: "#"
  - generic [ref=f4e4]:
    - generic [ref=f4e5]:
      - generic [ref=f4e6]:
        - banner [ref=f4e7]:
          - generic [ref=f4e8]:
            - generic [ref=f4e12]:
              - generic [ref=f4e14]:
                - generic [ref=f4e15]:
                  - generic [ref=f4e16]: 
                  - text: Order online or call us (+1800) 000 8808
                - generic [ref=f4e17]: │
                - generic [ref=f4e18]:
                  - generic [ref=f4e19]: 
                  - text: 1730 S. Amphlett Blvd. Suite 200, San Mateo, CA
              - generic [ref=f4e21]:
                - link "Log in / Sign up" [ref=f4e23] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/my-account/
                - generic [ref=f4e29]: │
                - generic [ref=f4e30]:
                  - link "Pinterest" [ref=f4e31] [cursor=pointer]:
                    - /url: "#"
                  - link "Instagram" [ref=f4e34] [cursor=pointer]:
                    - /url: "#"
                  - link "Twitter" [ref=f4e37] [cursor=pointer]:
                    - /url: "#"
                  - link "Facebook" [ref=f4e40] [cursor=pointer]:
                    - /url: "#"
            - generic [ref=f4e46]:
              - link [ref=f4e49] [cursor=pointer]:
                - /url: https://demo.testarchitect.com
              - generic [ref=f4e52]:
                - generic [ref=f4e55]:
                  - group "1 / 5" [ref=f4e56]:
                    - generic [ref=f4e60]: NO ORDERS SHALL BE FULFILLED
                  - group "2 / 5" [ref=f4e61]:
                    - generic [ref=f4e65]: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
                  - group "3 / 5" [ref=f4e66]:
                    - generic [ref=f4e70]: THIS SITE IS USING FOR TRAINING PURPOSE ONLY
                  - group "4 / 5" [ref=f4e71]:
                    - generic [ref=f4e75]: NO ORDERS SHALL BE FULFILLED
                  - group "5 / 5" [ref=f4e76]:
                    - generic [ref=f4e80]: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
                - search [ref=f4e82]:
                  - generic [ref=f4e83]:
                    - combobox [ref=f4e84] [cursor=pointer]:
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
                    - generic [ref=f4e85]: Search input
                    - textbox "Search input" [ref=f4e86]:
                      - /placeholder: Type here...
                    - button [ref=f4e88] [cursor=pointer]
              - generic [ref=f4e92]:
                - link "0 Wishlist" [ref=f4e94] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/wishlist/
                  - generic [ref=f4e95]:
                    - generic [ref=f4e96]: "0"
                    - generic [ref=f4e101]: Wishlist
                - generic [ref=f4e102]: │
                - link "3 $709.00" [ref=f4e104] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/cart/
                  - generic [ref=f4e105]:
                    - generic [ref=f4e106]: "3"
                    - generic [ref=f4e111]: $709.00
            - generic [ref=f4e118]:
              - generic [ref=f4e121]:
                - generic [ref=f4e122] [cursor=pointer]:
                  - generic [ref=f4e123]: 
                  - generic [ref=f4e125]: All departments
                  - text: 
                - generic:       
              - list [ref=f4e129]:
                - listitem [ref=f4e130]:
                  - link "Home" [ref=f4e131] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/
                - listitem [ref=f4e132]:
                  - link "About Us" [ref=f4e133] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/about-us/
                - listitem [ref=f4e134]:
                  - link "Shop" [ref=f4e135] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/shop/
                - listitem [ref=f4e136]:
                  - link " Offers" [ref=f4e137] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/product-category/electronic-components-supplies/
                    - generic [ref=f4e138]: 
                    - text: Offers
                - listitem [ref=f4e139]:
                  - link "Blog" [ref=f4e140] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/blog/
                - listitem [ref=f4e141]:
                  - link "Contact Us" [ref=f4e142] [cursor=pointer]:
                    - /url: https://demo.testarchitect.com/contact/
        - generic: 
        - generic [ref=f4e143]:
          - link "1 Shopping cart" [ref=f4e144] [cursor=pointer]:
            - /url: https://demo.testarchitect.com/cart/
          - link "2 Checkout":
            - /url: https://demo.testarchitect.com/checkout/
          - link "3 Order status":
            - /url: "#"
          - generic [ref=f4e145]: 🔥 Hurry up, these products are limited, checkout within 14:23
        - generic [ref=f4e151]:
          - generic [ref=f4e152]:
            - generic [ref=f4e154]:
              - text: 󡀀 Returning customer?
              - link "Click here to login" [ref=f4e155] [cursor=pointer]:
                - /url: "#"
            - generic [ref=f4e157]:
              - text:  Have a coupon?
              - link "Click here to enter your code" [ref=f4e158] [cursor=pointer]:
                - /url: "#"
          - generic [ref=f4e160]:
            - generic [ref=f4e162]:
              - generic [ref=f4e164]:
                - heading "Billing Details" [level=3] [ref=f4e165]
                - generic [ref=f4e166]:
                  - paragraph [ref=f4e167]:
                    - generic [ref=f4e168]: First name *
                    - textbox "First name *" [ref=f4e170]:
                      - /placeholder: ""
                      - text: Duoc
                  - paragraph [ref=f4e171]:
                    - generic [ref=f4e172]: Last name *
                    - textbox "Last name *" [ref=f4e174]:
                      - /placeholder: ""
                      - text: Nguyen
                  - paragraph [ref=f4e175]:
                    - generic [ref=f4e176]: Company name (optional)
                    - textbox "Company name (optional)" [ref=f4e178]:
                      - /placeholder: ""
                  - paragraph [ref=f4e179]:
                    - generic [ref=f4e180]: Country / Region *
                    - generic [ref=f4e181]:
                      - combobox [ref=f4e182] [cursor=pointer]
                      - combobox "Country / Region" [ref=f4e185] [cursor=pointer]:
                        - textbox "Vietnam" [ref=f4e186]
                  - paragraph [ref=f4e187]:
                    - generic [ref=f4e188]: Street address *
                    - textbox "Street address *" [ref=f4e190]:
                      - /placeholder: House number and street name
                      - text: 777 Ha Noi Street
                  - paragraph [ref=f4e191]:
                    - generic [ref=f4e192]:
                      - text: Apartment, suite, unit, etc.
                      - generic [ref=f4e193]: (optional)
                    - textbox "Apartment, suite, unit, etc. (optional)" [ref=f4e195]
                  - paragraph [ref=f4e196]:
                    - generic [ref=f4e197]: Postcode / ZIP (optional)
                    - textbox "Postcode / ZIP (optional)" [ref=f4e199]:
                      - /placeholder: ""
                      - text: "100000"
                  - paragraph [ref=f4e200]:
                    - generic [ref=f4e201]: Town / City *
                    - textbox "Town / City *" [ref=f4e203]:
                      - /placeholder: ""
                      - text: Ha Noi
                  - paragraph [ref=f4e204]:
                    - generic [ref=f4e205]: Phone *
                    - textbox "Phone *" [ref=f4e207]:
                      - /placeholder: ""
                      - text: "0123456789"
                  - paragraph [ref=f4e208]:
                    - generic [ref=f4e209]: Email address *
                    - textbox "Email address *" [ref=f4e211]:
                      - /placeholder: ""
                      - text: testguest@yopmail.com
                - paragraph [ref=f4e213]:
                  - generic [ref=f4e214]:
                    - checkbox "Create an account?" [ref=f4e215]
                    - text: Create an account?
              - paragraph [ref=f4e219]:
                - generic [ref=f4e220]: Order notes (optional)
                - textbox "Order notes (optional)" [ref=f4e222]:
                  - /placeholder: Notes about your order, e.g. special notes for delivery.
            - generic [ref=f4e224]:
              - heading "Your order" [level=3] [ref=f4e225]
              - generic [ref=f4e226]:
                - table [ref=f4e227]:
                  - rowgroup [ref=f4e228]:
                    - row [ref=f4e229]:
                      - cell [ref=f4e230]:
                        - text: Canon i-SENSYS LBP6030W with Wi-Fi
                        - strong [ref=f4e231]: × 2
                      - cell "$580.00" [ref=f4e232]
                    - row [ref=f4e235]:
                      - cell [ref=f4e236]:
                        - text: DJI Mavic Pro Camera Drone
                        - strong [ref=f4e237]: × 1
                      - cell "$129.00" [ref=f4e238]
                  - rowgroup [ref=f4e241]:
                    - row [ref=f4e242]:
                      - rowheader "Subtotal" [ref=f4e243]
                      - cell "$709.00" [ref=f4e244]
                    - row [ref=f4e247]:
                      - rowheader "Total" [ref=f4e248]
                      - cell "$709.00" [ref=f4e249]:
                        - strong [ref=f4e250]:
                          - generic [ref=f4e251]: $709.00
                - generic [ref=f4e253]:
                  - list [ref=f4e254]:
                    - listitem [ref=f4e255]:
                      - radio "Direct bank transfer" [checked] [ref=f4e256]
                      - generic [ref=f4e257]: Direct bank transfer
                      - paragraph [ref=f4e259]: Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    - listitem [ref=f4e260]:
                      - radio "Check payments" [ref=f4e261]
                      - generic [ref=f4e262]: Check payments
                    - listitem [ref=f4e263]:
                      - radio "Cash on delivery" [ref=f4e264]
                      - generic [ref=f4e265]: Cash on delivery
                  - generic [ref=f4e266]:
                    - paragraph [ref=f4e269]:
                      - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                      - link "privacy policy" [ref=f4e270] [cursor=pointer]:
                        - /url: https://demo.testarchitect.com/?page_id=3
                      - text: .
                    - button "Place order" [ref=f4e271] [cursor=pointer]
        - contentinfo [ref=f4e272]
      - generic [ref=f4e286]:
        - contentinfo [ref=f4e287]:
          - generic [ref=f4e294]:
            - img "talogoblue" [ref=f4e299]
            - generic [ref=f4e305]:
              - link "About Us" [ref=f4e306] [cursor=pointer]:
                - /url: /about-us/
              - link "Shop" [ref=f4e307] [cursor=pointer]:
                - /url: /shop/
              - link "Offers" [ref=f4e308] [cursor=pointer]:
                - /url: /electronic-components-supplies/
              - link "Blog" [ref=f4e309] [cursor=pointer]:
                - /url: /blog/
              - link "Contact Us" [ref=f4e310] [cursor=pointer]:
                - /url: /contact/
        - generic [ref=f4e311]: Copyright © 2021 LogiGear Corporation. All rights reserved.
    - generic [ref=f4e321]:
      - generic [ref=f4e322] [cursor=pointer]
      - generic [ref=f4e325]:
        - link [ref=f4e326] [cursor=pointer]:
          - /url: https://demo.testarchitect.com/product/bose-quietcomfort-35/
          - img "Bose® 35 Wireless Headphones" [ref=f4e327]
        - generic [ref=f4e328]:
          - generic [ref=f4e329]:
            - text: 👜
            - generic [ref=f4e330]:
              - text: Someone recently bought a
              - link "Bose® 35 Wireless Headphones" [ref=f4e331] [cursor=pointer]:
                - /url: https://demo.testarchitect.com/product/bose-quietcomfort-35/
          - generic [ref=f4e332]:
            - generic [ref=f4e333]: 45 minutes ago
            - generic [ref=f4e334]: from Islamabad, Pakistan 🇵🇰
          - generic [ref=f4e335]:
            - deletion [ref=f4e336]:
              - generic [ref=f4e337]: $1,999.00
            - insertion [ref=f4e339]:
              - generic [ref=f4e340]: $1,000.00
          - link "View product " [ref=f4e343] [cursor=pointer]:
            - /url: https://demo.testarchitect.com/product/bose-quietcomfort-35/
    - generic [ref=f4e345] [cursor=pointer]: 
  - generic [ref=f4e349]: widescreen
  - dialog "Cookie Notice" [ref=f4e350]:
    - generic [ref=f4e351]:
      - generic [ref=f4e352]: We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
      - link "Ok" [ref=f4e354] [cursor=pointer]:
        - /url: "#"
      - generic "No" [ref=f4e355] [cursor=pointer]
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
  55 |     await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  56 |     await this.page.getByText(methodName, { exact: true }).click({ force: true });
  57 |   }
  58 | 
  59 |   async placeOrder() {
  60 |     await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  61 |     await this.page.waitForTimeout(2000); 
  62 |     await this.placeOrderBtn.scrollIntoViewIfNeeded();
  63 |     await this.placeOrderBtn.click({ force: true });
  64 |   }
  65 | 
  66 |   async verifyOrderSuccess(timeoutMs: number = 30000) {
> 67 |     const element = await this.page.waitForSelector('.woocommerce-notice--success, .woocommerce-error', { state: 'visible', timeout: timeoutMs });
     |                                     ^ TimeoutError: page.waitForSelector: Timeout 30000ms exceeded.
  68 |     const className = await element.getAttribute('class') || '';
  69 | 
  70 |     if (className.includes('woocommerce-error')) {
  71 |       const errorText = await element.innerText();
  72 |       throw new Error(`Test FAIL do Server Demo từ chối đơn hàng với lý do: ${errorText}`);
  73 |     }
  74 |     await expect(this.page.getByRole('heading', { name: 'Order details' })).toBeVisible();
  75 |   }
  76 | 
  77 |   async verifyMandatoryFieldsError() {
  78 |     await this.page.locator('.blockUI').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  79 |     await this.page.waitForTimeout(2000);
  80 |     await this.page.waitForSelector('.woocommerce-error', { state: 'visible', timeout: 15000 });
  81 |     const errorCount = await this.errorMessages.count();
  82 |     expect(errorCount).toBeGreaterThan(0);
  83 |   }
  84 | }
```