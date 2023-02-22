// Login page objects for Swag labs


const homeCommands = {
    Login() {
        return this.navigate()
            .waitForElementVisible('@username')
            .waitForElementVisible('@password')
            .waitForElementVisible('@loginButton')
            .setValue('@username', 'standard_user')
            .setValue('@password', 'secret_sauce')
            .click('@loginButton');
    }
  };
  
  module.exports = {
    url: 'https://www.saucedemo.com/',
  
    commands: [homeCommands],
  
    elements: {
      username: {
        selector: '#user-name'
      },
  
      password: {
        selector: '#password'
      },
  
      loginButton: {
        selector: '#login-button'
      }
    }
  };
  