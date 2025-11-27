const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async isElementEnabled(locator) {
    await expect(locator).toBeEnabled();
  }

  async isElementVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async isElementChecked(locator) {
    await expect(locator).toBeChecked();
  }

  async elementCount(locator, expectedCount) {
    await expect(locator).toHaveCount(expectedCount);
  }

  async elementChecked(locator) {
    await expect(locator).toBeChecked();
  }

  async elementUnChecked(locator) {
    await expect(locator).not.toBeChecked();
  }
}

module.exports = { BasePage };
