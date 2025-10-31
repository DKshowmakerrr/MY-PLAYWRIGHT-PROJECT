// Chỉ chứa logic kiểm thử:

// Chuẩn bị dữ liệu (arrange)

// Thực hiện hành động (act) → dùng method của Page Object

// Kiểm tra kết quả (assert)

// Không chứa locator hay thao tác trực tiếp với element (ngoại trừ test rất nhỏ)

const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../../pages/textbox.page');
const { assert } = require('console');

test('Fullname input should be enabled', async ({ page }) => {
  const textboxPage = new TextBoxPage();
  await textboxPage.goto();
  await textboxPage.isElementEnabled(textboxPage.fullnameInput);
});
