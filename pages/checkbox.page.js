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
    this.allNodes = page.locator('.rct-node');
    // in ra tất cả id của node ở console:
    // document.querySelectorAll('[id^="tree-node"]').forEach((el) => {
    //   console.log(el.id);
    // });
    this.homeNode = page.locator('#tree-node-home');
    this.desktopNode = page.locator('#tree-node-desktop');
    this.notesNode = page.locator('#tree-node-notes');
    this.commandsNode = page.locator('#tree-node-commands');
    this.documentsNode = page.locator('#tree-node-documents');
    this.workspaceNode = page.locator('#tree-node-workspace');
    this.reactNode = page.locator('#tree-node-react');
    this.angularNode = page.locator('#tree-node-angular');
    this.veuNode = page.locator('#tree-node-veu');
    this.officeNode = page.locator('#tree-node-office');
    this.publicNode = page.locator('#tree-node-public');
    this.privateNode = page.locator('#tree-node-private');
    this.classifiedNode = page.locator('#tree-node-classified');
    this.generalNode = page.locator('#tree-node-general');
    this.downloadsNode = page.locator('#tree-node-downloads');
    this.wordNode = page.locator('#tree-node-wordFile');
    this.excelNode = page.locator('#tree-node-excelFile');
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

  async checkNode(locator) {
    await locator.check();
  }
}

module.exports = { CheckBoxPage };
