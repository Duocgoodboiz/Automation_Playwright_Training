# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc_05_order_history.spec.ts >> TC_05 - Verify orders appear in order history
- Location: tests/tc_05_order_history.spec.ts:5:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('.woocommerce-MyAccount-navigation-link--orders a')

```

# Page snapshot

```yaml
- generic [active] [ref=f11e1]:
  - paragraph [ref=f11e2]:
    - text: THIS IS A DEMO STORE FOR TESTING AND TRAINING PURPOSES - NO ORDERS SHALL BE FULFILLED. *** THIS SITE WILL BE RESET DAILY AT 23:00 ***
    - link "Dismiss" [ref=f11e3] [cursor=pointer]:
      - /url: "#"
  - generic [ref=f11e5]:
    - generic [ref=f11e6]:
      - banner [ref=f11e7]:
        - generic [ref=f11e8]:
          - generic [ref=f11e12]:
            - generic [ref=f11e14]:
              - generic [ref=f11e15]:
                - generic [ref=f11e16]: 
                - text: Order online or call us (+1800) 000 8808
              - generic [ref=f11e17]: │
              - generic [ref=f11e18]:
                - generic [ref=f11e19]: 
                - text: 1730 S. Amphlett Blvd. Suite 200, San Mateo, CA
            - generic [ref=f11e21]:
              - link "Log in / Sign up" [ref=f11e23] [cursor=pointer]:
                - /url: https://demo.testarchitect.com/my-account/
              - generic [ref=f11e29]: │
              - generic [ref=f11e30]:
                - link "Pinterest" [ref=f11e31] [cursor=pointer]:
                  - /url: "#"
                - link "Instagram" [ref=f11e34] [cursor=pointer]:
                  - /url: "#"
                - link "Twitter" [ref=f11e37] [cursor=pointer]:
                  - /url: "#"
                - link "Facebook" [ref=f11e40] [cursor=pointer]:
                  - /url: "#"
          - generic [ref=f11e46]:
            - link [ref=f11e49] [cursor=pointer]:
              - /url: https://demo.testarchitect.com
            - generic [ref=f11e52]:
              - generic [ref=f11e55]:
                - group "1 / 5" [ref=f11e56]:
                  - generic [ref=f11e60]: NO ORDERS SHALL BE FULFILLED
                - group "2 / 5" [ref=f11e61]:
                  - generic [ref=f11e65]: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
                - group "3 / 5" [ref=f11e66]:
                  - generic [ref=f11e70]: THIS SITE IS USING FOR TRAINING PURPOSE ONLY
                - group "4 / 5" [ref=f11e71]:
                  - generic [ref=f11e75]: NO ORDERS SHALL BE FULFILLED
                - group "5 / 5" [ref=f11e76]:
                  - generic [ref=f11e80]: THIS IS THE TESTARCHITECT SAMPLE WEBSITE
              - search [ref=f11e82]:
                - generic [ref=f11e83]:
                  - combobox [ref=f11e84] [cursor=pointer]:
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
                  - generic [ref=f11e85]: Search input
                  - textbox "Search input" [ref=f11e86]:
                    - /placeholder: Type here...
                  - button [ref=f11e88] [cursor=pointer]
            - generic [ref=f11e92]:
              - link "0 Wishlist" [ref=f11e94] [cursor=pointer]:
                - /url: https://demo.testarchitect.com/wishlist/
                - generic [ref=f11e95]:
                  - generic [ref=f11e96]: "0"
                  - generic [ref=f11e101]: Wishlist
              - generic [ref=f11e102]: │
              - link "2 $580.00" [ref=f11e104] [cursor=pointer]:
                - /url: https://demo.testarchitect.com/cart/
                - generic [ref=f11e105]:
                  - generic [ref=f11e106]: "2"
                  - generic [ref=f11e111]: $580.00
          - generic [ref=f11e118]:
            - generic [ref=f11e121]:
              - generic [ref=f11e122] [cursor=pointer]:
                - generic [ref=f11e123]: 
                - generic [ref=f11e125]: All departments
                - text: 
              - generic:       
            - list [ref=f11e129]:
              - listitem [ref=f11e130]:
                - link "Home" [ref=f11e131] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/
              - listitem [ref=f11e132]:
                - link "About Us" [ref=f11e133] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/about-us/
              - listitem [ref=f11e134]:
                - link "Shop" [ref=f11e135] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/shop/
              - listitem [ref=f11e136]:
                - link " Offers" [ref=f11e137] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/product-category/electronic-components-supplies/
                  - generic [ref=f11e138]: 
                  - text: Offers
              - listitem [ref=f11e139]:
                - link "Blog" [ref=f11e140] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/blog/
              - listitem [ref=f11e141]:
                - link "Contact Us" [ref=f11e142] [cursor=pointer]:
                  - /url: https://demo.testarchitect.com/contact/
      - generic [ref=f11e146]:
        - text: 
        - heading "󡀀My Account" [level=1] [ref=f11e147]
      - generic [ref=f11e161]:
        - generic [ref=f11e162]:
          - heading "Login" [level=2] [ref=f11e163]
          - generic [ref=f11e164]:
            - paragraph [ref=f11e165]:
              - generic [ref=f11e166]: Username or email address *
              - textbox "Username or email address *" [ref=f11e167]
            - paragraph [ref=f11e168]:
              - generic [ref=f11e169]: Password *
              - textbox "Password *" [ref=f11e172]
            - paragraph [ref=f11e176]:
              - generic [ref=f11e177]:
                - checkbox "Remember me" [ref=f11e178]
                - text: Remember me
              - link "Lost your password?" [ref=f11e179] [cursor=pointer]:
                - /url: https://demo.testarchitect.com/my-account/lost-password/
            - paragraph [ref=f11e180]:
              - button "Log in" [ref=f11e181] [cursor=pointer]
        - generic [ref=f11e182]:
          - heading "Register" [level=2] [ref=f11e183]
          - generic [ref=f11e184]:
            - paragraph [ref=f11e185]:
              - generic [ref=f11e186]: Email address *
              - textbox "Email address *" [ref=f11e187]
            - paragraph [ref=f11e188]: A password will be sent to your email address.
            - paragraph [ref=f11e190]:
              - text: Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
              - link "privacy policy" [ref=f11e191] [cursor=pointer]:
                - /url: https://demo.testarchitect.com/?page_id=3
              - text: .
            - paragraph [ref=f11e192]:
              - button "Register" [ref=f11e193] [cursor=pointer]
      - contentinfo [ref=f11e194]
    - generic [ref=f11e208]:
      - contentinfo [ref=f11e209]:
        - generic [ref=f11e216]:
          - img "talogoblue" [ref=f11e221]
          - generic [ref=f11e227]:
            - link "About Us" [ref=f11e228] [cursor=pointer]:
              - /url: /about-us/
            - link "Shop" [ref=f11e229] [cursor=pointer]:
              - /url: /shop/
            - link "Offers" [ref=f11e230] [cursor=pointer]:
              - /url: /electronic-components-supplies/
            - link "Blog" [ref=f11e231] [cursor=pointer]:
              - /url: /blog/
            - link "Contact Us" [ref=f11e232] [cursor=pointer]:
              - /url: /contact/
      - generic [ref=f11e233]: Copyright © 2021 LogiGear Corporation. All rights reserved.
  - generic [ref=f11e243]: widescreen
  - dialog "Cookie Notice" [ref=f11e244]:
    - generic [ref=f11e245]:
      - generic [ref=f11e246]: We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
      - link "Ok" [ref=f11e248] [cursor=pointer]:
        - /url: "#"
      - generic "No" [ref=f11e249] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class MyAccountPage {
  4  |   readonly page: Page;
  5  |   readonly ordersLink: Locator;
  6  |   readonly ordersTable: Locator;
  7  |   readonly orderRows: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     
  12 |     this.ordersLink = page.locator('.woocommerce-MyAccount-navigation-link--orders a');
  13 |     
  14 |     this.ordersTable = page.locator('table.woocommerce-orders-table');
  15 |     this.orderRows = page.locator('table.woocommerce-orders-table tbody tr.woocommerce-orders-table__row');
  16 |   }
  17 | 
  18 |   async goToOrdersTab() {
> 19 |     await this.ordersLink.click();
     |                           ^ Error: locator.click: Test timeout of 120000ms exceeded.
  20 |   }
  21 | 
  22 |   async verifyOrdersAreDisplayed(expectedMinimumOrders: number = 2) {
  23 |     await expect(this.ordersTable).toBeVisible({ timeout: 15000 });
  24 |     
  25 |     const actualOrderCount = await this.orderRows.count();
  26 |     console.log(`Số lượng đơn hàng hiện tại: ${actualOrderCount}`);
  27 |     expect(actualOrderCount).toBeGreaterThanOrEqual(expectedMinimumOrders);
  28 |   }
  29 | }
```