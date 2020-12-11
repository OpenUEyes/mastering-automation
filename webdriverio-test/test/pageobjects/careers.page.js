class CareersPage {
    get openPosition() {
        return $('a[href="#positions"]');
    }

    clickOpenPosition() {
        this.openPosition.click();
    }

    get directions() {
        return $$('h3.float-left.h3-mktg.text-normal.py-4');
    }
}

module.exports = new CareersPage();