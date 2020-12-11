class NavbarPage {
    get url() {
        return 'https://github.com/';
    }

    get signUp() {
        //return $('.HeaderMenu-link.d-inline-block');
        //return $('//a[contains(@href,"/join") and contains(@class, "HeaderMenu-link")]');
        return $('a[href*="/join"][class*="HeaderMenu-link"]');

    }

    clickSignUp() {
        this.signUp.click();
    }

    get signIn() {
        return $('a[href*="/login"]');
    }

    clickSignIn() {
        this.signIn.click();
    }

    get why() {
        return $('//summary[contains(text(),"Why GitHub?")]');
    }

    get explore() {
        return $('//summary[contains(text(),"Explore")]')
    }

    get exploreGitHub(){
        return $('a[href="/explore"]');
    }

    clickExploreGitHub() {
        this.exploreGitHub.click();
    }

    get pricing() {
        return $('//summary[contains(text(),"Pricing")]/..');
    }

    get plans() {
        return $('a[href="/pricing"][data-ga-click="(Logged out) Header, go to Pricing"]');
    }

    clickPlans() {
        this.plans.click();
    }

    get search() {
        return $('input[placeholder="Search GitHub"]');
    }

    set search(value) {
        this.search.setValue(value);
    }
    clickSearch() {
        this.search.click();
    }
}

module.exports = new NavbarPage();