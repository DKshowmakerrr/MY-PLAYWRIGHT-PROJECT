// Chỉ chứa logic kiểm thử:

// Chuẩn bị dữ liệu (arrange)

// Thực hiện hành động (act) → dùng method của Page Object

// Kiểm tra kết quả (assert)

// Không chứa locator hay thao tác trực tiếp với element (ngoại trừ test rất nhỏ)
const { test, expect } = require('@playwright/test');
const { CheckBoxPage } = require('../../pages/checkbox.page');

/** @type {import('../../pages/checkbox.page').CheckBoxPage} */
let checkBox;
test.beforeEach(async ({ page }) => {
  checkBox = new CheckBoxPage(page);
  await checkBox.goto();
});

test('Expand All should show exactly all nodes in the tree', async () => {
  await checkBox.clickExpandAll();
  await checkBox.elementCount(checkBox.allNodes, 17);
});

test('mark notes and commands as checked and result in desktop checked', async () => {
  await checkBox.checkNode(checkBox.notesNode);
  await checkBox.checkNode(checkBox.commandsNode);
  await checkBox.elementChecked(checkBox.desktopNode);
});

test('Collapse All should hid exactly one node in the tree', async () => {
  await checkBox.clickCollapseAll();
  await checkBox.elementCount(checkBox.allNodes, 1);
});
