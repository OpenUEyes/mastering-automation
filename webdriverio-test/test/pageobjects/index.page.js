class IndexPage {
    get url() {
        return ('https://github.com/');
    }

    get careers() {
        return $('a[href="/about/careers"]');
    }

    clickCareers() {
        this.careers.click();
    }
}

module.exports = new IndexPage();