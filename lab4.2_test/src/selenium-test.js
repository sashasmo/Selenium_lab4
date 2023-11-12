// Реєстрація нового користувача:
const { Builder, By } = require('selenium-webdriver');

async function registerNewUser() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://demo-store.seleniumacademy.com');

    // Знайдіть елементи та введіть дані для реєстрації, наприклад:
    await driver.findElement(By.linkText('Account')).click();
    await driver.findElement(By.linkText('Register')).click();
    await driver.findElement(By.id('firstname')).sendKeys('John');
    await driver.findElement(By.id('lastname')).sendKeys('Doe');
    await driver.findElement(By.id('email_address')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('password');
    await driver.findElement(By.id('confirmation')).sendKeys('password');
    await driver.findElement(By.css('.buttons-set .button')).click();
    
  } finally {
    await driver.quit();
  }
}

registerNewUser().catch(error => console.error(error));
