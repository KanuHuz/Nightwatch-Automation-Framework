// Swag Labs Login Test

module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
        browser.navigateTo('https://www.saucedemo.com/')
    

    describe('Login on Swag Labs site', function() {
        it('Login to the inventory page', function(browser) {
        const login = browser.page.login()
        login
            .Login()
            //.url('https://www.saucedemo.com/')
            //.waitForElementVisible('@username')
            //.waitForElementVisible('@password')
            //.waitForElementVisible('@loginButton')
            //.setValue('@username', 'standard_user')
            //.setValue('@password', 'secret_sauce')
            //.click('@loginButton')
            .assert.urlContains('https://www.saucedemo.com/inventory.html');
         });
     });

    },
    after: function (browser) {
        browser.end();
    }

}

    

