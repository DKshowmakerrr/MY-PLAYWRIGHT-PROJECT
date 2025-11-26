// https://demoqa.com/
// https://www.automationexercise.com/

// Chỉ chứa logic thao tác với UI hoặc element trên page.

// Không chứa assert (expect) hoặc kiểm tra test.

// Chứa:

// Locator của các element

// Các method thao tác với element:

// Click, fill, select, hover, kéo thả...

// Method tiện ích (helper) liên quan đến page

// Tránh dùng XPath nếu có thể → CSS selector nhanh và dễ đọc.

// Dùng text khi cần chọn button hoặc link dựa vào hiển thị.

// Dùng first(), nth(), last() khi có nhiều element giống nhau.

// Locator là lazy → nó chưa thực sự query element cho đến khi bạn thực hiện hành động (click(), fill(), textContent(), etc.).
const { BasePage } = require('./base.page');
class CheckBoxPage extends BasePage {
  constructor(page) {
    super(page); //gọi constructor của basepage
    this.expandAllButton = page.getByTitle('Expand all');
    this.collapseAllButton = page.getByTitle('Collapse all');
  }

  async goto() {
    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (/ads|doubleclick|googlesyndication/.test(url)) return route.abort();
      route.continue();
    });
    await this.page.goto('https://demoqa.com/checkbox'), { waitUntil: 'domcontentloaded' };
    // timeout: 60000;
  }

  async click(fullname, email, currentAddress, permanentAddress) {
    await this.fullnameInput.fill(fullname);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);
    await this.submitButton.click();
  }
}

module.exports = { TextBoxPage };
