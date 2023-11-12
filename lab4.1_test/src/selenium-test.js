// Перехід по всіх сторінках проєкту:
const { Builder, By } = require('selenium-webdriver');

async function navigateToAllPages() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://demo-store.seleniumacademy.com');
    
    // Виконайте код для переходу на всі сторінки проекту, наприклад:
    await driver.findElement(By.linkText('Home')).click();
    await driver.findElement(By.linkText('About Us')).click();
    await driver.findElement(By.linkText('Contact Us')).click();

  } finally {
    await driver.quit();
  }
}

navigateToAllPages().catch(error => console.error(error));
