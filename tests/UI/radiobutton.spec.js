// Chỉ chứa logic kiểm thử:

// Chuẩn bị dữ liệu (arrange)

// Thực hiện hành động (act) → dùng method của Page Object

// Kiểm tra kết quả (assert)

// Không chứa locator hay thao tác trực tiếp với element (ngoại trừ test rất nhỏ)
const { test, expect } = require('@playwright/test');
const { CheckBoxPage } = require('../../pages/checkbox.page');
const { RadioButtonPage } = require('../../pages/radiobutton.page');

/** @type {import('../../pages/checkbox.page').RadioButtonPage} */
let checkBox;
test.beforeEach(async ({ page }) => {
  checkBox = new RadioButtonPage(page);
  await checkBox.goto();
});

test('Expand All should show exactly all nodes in the tree', async () => {
  await checkBox.clickExpandAll();
  await checkBox.elementCount(checkBox.allNodes, 17);
});

test('mark notes and commands as checked and result in desktop checked', async () => {
  await checkBox.clickNode(checkBox.notesNode);
  await checkBox.clickNode(checkBox.commandsNode);
  await checkBox.verifyCheckedSVG(checkBox.desktopNode);
  await 
});

test('Collapse All should hid exactly one node in the tree', async () => {
  await checkBox.clickCollapseAll();
  await checkBox.elementCount(checkBox.allNodes, 1);
});
