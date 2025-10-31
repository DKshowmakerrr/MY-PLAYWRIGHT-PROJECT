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
}

module.exports = { BasePage };
