module.exports = {

    url: 'https://testpages.eviltester.com/styled/basic-html-form-test.html',

    elements: {
        username: by.xpath('//input[@name="username"]'),
        password: by.name('password'),
        comments: by.name('comments'),
        submitButton: by.xpath('//input[@value="submit"]')
    },

    preformSearch: function (searchQuery) {
        var selector = page.testpage.elements.username;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.Key.ENTER);
    }
};