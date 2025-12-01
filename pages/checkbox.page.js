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
const { assert } = require('console');
const { BasePage } = require('./base.page');
const { expect } = require('@playwright/test');
class CheckBoxPage extends BasePage {
  constructor(page) {
    super(page); //gọi constructor của basepage
    this.expandAllButton = page.getByTitle('Expand all');
    this.collapseAllButton = page.getByTitle('Collapse all');
    this.allNodes = page.locator('.rct-node');
    // in ra tất cả id của node ở console:
    // document.querySelectorAll('[id^="tree-node"]').forEach((el) => {
    //   console.log(el.id);
    // });
    this.homeNode = page.locator('#tree-node-home');
    this.desktopNode = page.locator("//label[@for='tree-node-desktop']//span[@class='rct-checkbox']//*[name()='svg']");
    this.notesNode = page.locator("//label[@for='tree-node-notes']//span[@class='rct-checkbox']//*[name()='svg']");
    this.documentsNode = page.locator(
      "//label[@for='tree-node-documents']//span[@class='rct-checkbox']//*[name()='svg']"
    );
    this.workspaceNode = page.locator(
      "//label[@for='tree-node-workspace']//span[@class='rct-checkbox']//*[name()='svg']"
    );
    this.reactNode = page.locator("//label[@for='tree-node-react']//span[@class='rct-checkbox']//*[name()='svg']");
    this.angularNode = page.locator("//label[@for='tree-node-angular']//span[@class='rct-checkbox']//*[name()='svg']");
    this.veuNode = page.locator("//label[@for='tree-node-veu']//span[@class='rct-checkbox']//*[name()='svg']");
    this.officeNode = page.locator("//label[@for='tree-node-office']//span[@class='rct-checkbox']//*[name()='svg']");
    this.officeNode = page.locator("//label[@for='tree-node-public']//span[@class='rct-checkbox']//*[name()='svg']");
    this.privateNode = page.locator("//label[@for='tree-node-private']//span[@class='rct-checkbox']//*[name()='svg']");
    this.classifiedNode = page.locator(
      "//label[@for='tree-node-classified']//span[@class='rct-checkbox']//*[name()='svg']"
    );
    this.generalNode = page.locator("//label[@for='tree-node-general']//span[@class='rct-checkbox']//*[name()='svg']");
    this.downloadsNode = page.locator(
      "//label[@for='tree-node-downloads']//span[@class='rct-checkbox']//*[name()='svg']"
    );
    this.wordNode = page.locator("//label[@for='tree-node-word']//span[@class='rct-checkbox']//*[name()='svg']");
    this.excelNode = page.locator("//label[@for='tree-node-excel']//span[@class='rct-checkbox']//*[name()='svg']");
    this.commandsNode = page.locator(
      "//label[@for='tree-node-commands']//span[@class='rct-checkbox']//*[name()='svg']"
    );

    this.bottomText = page.locator("//div[@id='result']//span");
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

  async clickExpandAll() {
    await this.expandAllButton.click();
  }

  async clickCollapseAll() {
    await this.collapseAllButton.click();
  }

  async clickNode(locator) {
    await locator.click();
  }

  //kiểm tra xem node svg đã check
  async verifyCheckedSVG(locator) {
    await expect(locator).toContainClass('rct-icon rct-icon-check');
  }

  //kiểm tra xem node svg chưa check
  async verifyCheckedSVG(locator) {
    await expect(locator).toContainClass('rct-icon rct-icon-uncheck');
  }

  //kiểm tra text hiển thị khi select node
  async verifyText(svgLocator) {
    const title = svgLocator.locator("xpath=ancestor::label//span[@class='rct-title']");
    await expect(this.bottomText).toContainText(await title.textContent());
  }
}

module.exports = { CheckBoxPage };
