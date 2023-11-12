// Довільний функціонал за вибором студента.
// Пошуку конкретного продукту на веб-сайті і додавання його до кошика:
const { Builder, By, Key } = require('selenium-webdriver');  // Додали Key

async function searchAndAddToCart() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://demo-store.seleniumacademy.com');

    // Виконуємо пошук конкретного продукту (наприклад, "Sony Xperia") з використанням Key.RETURN
    const searchInput = await driver.findElement(By.id('search'));
    await searchInput.sendKeys('Sony Xperia', Key.RETURN);

    // Клікаємо на знайдений продукт
    await driver.findElement(By.linkText('Sony Xperia')).click();

    // Додаємо продукт до кошика
    await driver.findElement(By.css('.add-to-cart')).click();
    
    // Перевірка, що продукт доданий до кошика (може змінюватися відповідно до сайту)
    const successMessage = await driver.findElement(By.css('.success-msg'));
    if (await successMessage.isDisplayed()) {
      console.log('Продукт успішно доданий до кошика.');
    } else {
      console.log('Не вдалося додати продукт до кошика.');
    }
    
  } finally {
    await driver.quit();
  }
}

searchAndAddToCart().catch(error => console.error(error));
