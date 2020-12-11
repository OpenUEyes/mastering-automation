class ExplorePage {
    get url() {
        return 'https://github.com/explore';
    }

    get topics() {
        return $('//div/a[@href="/topics" and text()="Topics"]')
    }

    clickTopics() {
        this.topics.click();
    }

    getTopicsHeaderText() {
        return $('//h1[text()="Topics"]').getText();
    }
}

module.exports = new ExplorePage();