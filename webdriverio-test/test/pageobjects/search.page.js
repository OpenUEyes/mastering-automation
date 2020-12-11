class SearchPage {
    get typeScript() {
        return $('//a[@class="filter-item" and contains(@href, "TypeScript")]');
    }

    clickTypeScript() {
        this.typeScript.click();
    }

    get firstRepo() {
        return $('a.v-align-middle');
    }

    clickFirstRepo() {
        this.firstRepo.click();
    }
}

module.exports = new SearchPage();