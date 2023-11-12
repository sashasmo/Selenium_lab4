const { Builder, By, Key, until } = require('selenium-webdriver');

// Функція для виконання автоматизації
async function automateTest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://suninjuly.github.io/math.html');

    const xElement = await driver.findElement(By.id('input_value'));
    const x = await xElement.getText();

    const result = Math.log(Math.abs(12 * Math.sin(parseFloat(x))));

    const answerInput = await driver.findElement(By.id('answer'));
    await answerInput.sendKeys(result);

    const robotCheckbox = await driver.findElement(By.id('robotCheckbox'));
    await robotCheckbox.click();

    const robotRadio = await driver.findElement(By.id('robotsRule'));
    await robotRadio.click();

    const submitButton = await driver.findElement(By.css('.btn-default'));
    await submitButton.click();
  } finally {
    await driver.quit();
  }
}

// Виклик функції для автоматизації
automateTest().catch(error => console.error(error));
