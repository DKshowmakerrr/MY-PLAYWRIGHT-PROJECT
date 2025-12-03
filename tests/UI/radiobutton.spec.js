// Chỉ chứa logic kiểm thử:

// Chuẩn bị dữ liệu (arrange)

// Thực hiện hành động (act) → dùng method của Page Object

// Kiểm tra kết quả (assert)

// Không chứa locator hay thao tác trực tiếp với element (ngoại trừ test rất nhỏ)
const { test, expect } = require('@playwright/test');
const { RadioButtonPage } = require('../../pages/radiobutton.page');

/** @type {import('../../pages/radiobutton.page').RadioButtonPage} */
let radio;
test.beforeEach(async ({ page }) => {
  radio = new RadioButtonPage(page);
  await radio.goto();
});

test('Check default status of all checkboxes', async () => {
  await radio.elementDisabled(radio.noRadio);
  await radio.isElementEnabled(radio.yesRadio);
  await radio.isElementEnabled(radio.impressiveRadio);
});
