// Chỉ chứa logic kiểm thử:

// Chuẩn bị dữ liệu (arrange)

// Thực hiện hành động (act) → dùng method của Page Object

// Kiểm tra kết quả (assert)

// Không chứa locator hay thao tác trực tiếp với element (ngoại trừ test rất nhỏ)
const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../../pages/textbox.page');

let textboxPage;
test.beforeEach(async ({ page }) => {
  textboxPage = new TextBoxPage(page);
  await textboxPage.goto();
});

test('Fullname input should be enabled', async () => {
  await textboxPage.isElementEnabled(textboxPage.fullnameInput);
});

test('Email input should be enabled', async () => {
  await textboxPage.isElementEnabled(textboxPage.emailInput);
});

test('Current Address input should be enabled', async () => {
  await textboxPage.isElementEnabled(textboxPage.currentAddressInput);
});

test('Permanent address input should be enabled', async () => {
  await textboxPage.isElementEnabled(textboxPage.permanentAddressInput);
});
