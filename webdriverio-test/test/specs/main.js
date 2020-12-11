const assert = require('assert');
const navbarPage = require('../pageobjects/navbar.page.js');
const plansPage = require('../pageobjects/plans.page.js');
const registrationPage = require('../pageobjects/registration.page.js');
const explorePage = require('../pageobjects/explore.page.js');
const indexPage = require('../pageobjects/index.page.js');
const searchPage = require('../pageobjects/search.page.js');
const careersPage = require('../pageobjects/careers.page.js');
const resetPage = require('../pageobjects/reset.page.js');
const loginPage = require('../pageobjects/login.page.js');

describe('github authentication', () => {
    const userLogin = 'ghtyzx';
    const userPassword = 'gh3#d%fgh';
    const userPage = require('../pageobjects/user.page.js')(userLogin);

    it('should forward to login page',() => {
        browser.url(indexPage.url);
        navbarPage.clickSignIn();

        const expectedUrl = loginPage.url;
        assert(browser.getUrl() === expectedUrl);
    });

    it('should insert value to inputs and submit', ()=> {
        browser.pause(2000);
        loginPage.name = userLogin;
        loginPage.password = userPassword;
        browser.pause(2000);
        loginPage.clickSignIn();
    });

    it('should forward to user page', ()=> {
        const dropdown = $('summary[class="Header-link"][data-ga-click="Header, show menu, icon:avatar"]');
        dropdown.click();
        const href = $('a[class="dropdown-item"][data-ga-click="Header, go to profile, text:your profile"]');
        href.click();
        browser.pause(1000);
    });

    it('url should be the same as user login url', ()=> {
        const expectedUrl = userPage.url;
        assert(browser.getUrl().toUpperCase() === expectedUrl.toUpperCase());
    });

    it('should exist nickname and it must be the same like login', ()=> {
        const expectedNickname = userLogin;
        assert(userPage.getNickNameText().toUpperCase() === expectedNickname.toUpperCase());
    });

    it('logout', () => {
        const dropdown = $('summary[class="Header-link"][data-ga-click="Header, show menu, icon:avatar"]');
        dropdown.click();
        const href = $('button.dropdown-signout');
        href.click();
        browser.pause(2000);
    });
});

describe('reset password', () => {
    it('should forward to reset page',() => {
        browser.url(loginPage.url);
        browser.pause(2000);
        loginPage.clickPasswordReset();

        const expectedUrl = resetPage.url;
        assert(browser.getUrl() === expectedUrl);
    });

    it('shouldn`t allow enter invalid email', () => {
        const emailWithoudDomain = 'example@com';
        const emailWithoutAt = 'example.com.ua';
        resetPage.email = emailWithoudDomain;
        browser.pause(2000);
        resetPage.clickSubmit();
        assert(resetPage.error.isDisplayed());
        browser.pause(2000);

        resetPage.email = emailWithoutAt;
        browser.pause(2000);
        resetPage.clickSubmit();
        assert(resetPage.error.isDisplayed());
    });

    xit('should allow enter valid email', () => {
        const validEmail = 'thisIsValid@gmail.com';
        resetPage.email = validEmail;
        resetPage.clickSubmit();
        assert(!resetPage.error.isDisplayed());
    });

    it('header links should be displayed', () => {
        browser.url(indexPage.url);

        navbarPage.why.moveTo();
        assert(navbarPage.why.isDisplayed());
        browser.pause(2000);

        // hover signin because close elements do not show hover effect
        navbarPage.signIn.moveTo();
        navbarPage.explore.moveTo();
        assert(navbarPage.explore.isDisplayed());
        browser.pause(2000);
 
        // hover signin because close elements do not show hover effect 
        navbarPage.signIn.moveTo();
        navbarPage.pricing.moveTo();
        assert(navbarPage.pricing.isDisplayed());
        browser.pause(2000);
    })
});

describe('choose plan', () => {
    it('should forward to plans', () => {
        browser.url(indexPage.url);
        
        // hover signin because close elements do not show hover effect 
        navbarPage.signIn.moveTo();
        navbarPage.pricing.moveTo();
        browser.pause(2000);
        navbarPage.clickPlans();
        const expectedUrl = plansPage.url;
        assert(browser.getUrl() === expectedUrl);
    });

    it('should forward to registration after click at join for free', () => {
        browser.pause(2000);
        plansPage.clickJoinForFree();
        
        const expectedUrl = registrationPage.url;
        assert(browser.getUrl() === expectedUrl);
    });

    it('fill registration form', () => {
        browser.pause(2000);
        registrationPage.username = 'username';
        registrationPage.email = 'email@gmail.com';
        registrationPage.password = 'veryStrongPassword1';
        registrationPage.clickCheckbox();
        browser.pause(3000);
    });
});

describe('check explore title', () => {
    it('should forward to explore', () => {
        browser.url(indexPage.url);
        browser.pause(2000);
        navbarPage.explore.moveTo();
        navbarPage.clickExploreGitHub();
        const expectedUrl = explorePage.url;
        assert(browser.getUrl() === expectedUrl);
        browser.pause(2000);
    });
    
    it('should forward to topic section', () => {
        explorePage.clickTopics();
    });

    it('check topics header', () => {
        const expectedHeader = 'Topics';
        assert(explorePage.getTopicsHeaderText() === expectedHeader);
        assert(explorePage.topics.isDisplayed());
    });
});

describe('find repository', () => {
    it('enter value to search input', () => {
        browser.url('https://github.com/topics');
        navbarPage.search = 'webdriverio';
        browser.pause(2000);
        browser.keys("\uE007");
    });
    
    it('select first typescript repository', () => {
        searchPage.clickTypeScript();
        browser.pause(2000);
        searchPage.clickFirstRepo();
        assert(browser.getUrl().includes('webdriverio'));
        browser.pause(2000);
    });
});

describe('check careers', () => {
    it('select directions', () => {
        browser.url(indexPage.url);
        browser.pause(2000);
        indexPage.clickCareers();
        browser.pause(2000);
        careersPage.clickOpenPosition();
        browser.pause(2000);
        careersPage.directions.forEach(element => console.log("TEXT IS HERE:" + element.getText()));
    });
});