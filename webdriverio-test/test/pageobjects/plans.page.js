class PlansPage {
    get url() {
        return 'https://github.com/pricing';
    }

    get free() {
        return $('//a[text()="Join for free"]');
    }

    clickJoinForFree() {
        this.free.click();
    }
}

module.exports = new PlansPage();