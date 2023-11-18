module.exports = function () {

    this.Given(/^I visit Forms Page$/, function () {
        return helpers.loadPage(page.testpage.url);
    });

    this.When(/^I provide the username as "([^"]*)"$/, function (username) {
        var element = driver.findElement(page.testpage.elements.username);
        return element.sendKeys(username);
    });

    this.When(/^I provide the password as "([^"]*)"$/, function (password) {
        var element = driver.findElement(page.testpage.elements.password);
        return element.sendKeys(password);
    });

    this.When(/^I provide the comments as "([^"]*)"$/, function (comments) {
        var element = driver.findElement(page.testpage.elements.comments);
        return element.sendKeys(comments);
    });

    this.Then(/^I should be able to submit the form$/, function () {
        var element = driver.findElement(page.testpage.elements.submitButton);
        return element.click();
    });
};
