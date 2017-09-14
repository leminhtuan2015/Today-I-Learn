// Step 1: Download geckodriver (for macos)
// Step 2: export PATH="$PATH:$HOME/.rvm/bin:/Users/fuji/Documents/my/selenium/geckodriver"
// Step 3: npm install selenium-webdriver
// Step 4: node app.js


var webdriver = require('selenium-webdriver')
var By = webdriver.By
var Key = webdriver.Key
var until = webdriver.until

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com');

var inputSearch = driver.findElement(By.name('q'))
var buttonLogin = driver.findElement(By.id('gb_70'))

inputSearch.sendKeys('Tuan')
inputSearch.sendKeys(Key.ENTER)

buttonLogin.click()

var inputIdentifierId = driver.findElement(By.id('identifierId'))

inputIdentifierId.sendKeys('tuanlm258')
inputIdentifierId.sendKeys(Key.ENTER)

// SLEEP
driver.sleep(5000);

//var inputPassword = driver.findElement(By.tagName("input"))

var inputPassword = driver.findElement(By.name("password"))

inputPassword.sendKeys('bk201k55x')
inputPassword.sendKeys(Key.ENTER)

//driver.manage().deleteAllCookies();

//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver.quit();
