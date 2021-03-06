// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Google.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test.
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Google', async function() {
        // Load the page
        await driver.get('https://google.com');
        // Find the search box by id
        await driver.findElement(By.name('q')).click();
        // Enter keywords and click enter
        await driver.findElement(By.name('q')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, 'dalenguyen - Buscar con Google');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
})