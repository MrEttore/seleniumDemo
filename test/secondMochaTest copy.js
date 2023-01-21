// !-- 1. require the "Selenium WebDriver"-node modul:

const { Builder, By, Key } = require("selenium-webdriver");

// require package "assert" to write an assertion
var should = require("chai").should();

// describe block
describe("add todo tests", function () {
  it("succesfully adds a todo to application", async function () {
    //it block --> has the single test(s) we want to perform
    // describe() can hold more it-blocks

    // LAUNCH the browser
    // use "Builder"-command
    let driver = await new Builder().forBrowser("firefox").build();

    // NAVIGATE to our application bzw. navigate to the endpoint
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // ADD a toDo
    // find element we want to test in the webpage
    // add the string "Leanr Selenium" to the list by clicking on the RETURN Key (Enter-Taste)
    // Key.RETURN mimics pressing the Return button on our keyboard
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    // ASSERT

    // the variable will hold the text we want to validate
    // we want to check the last added element of the list
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    // assert using chai - should
    todoText.should.equal("Learn Selenium");

    // CLOSE the browser
    await driver.quit();
  });
});
