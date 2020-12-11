class UserPage {
    constructor(login) {
        this.login = login;
    }

    get url() {
        return `https://github.com/${this.login}`;
    }

    get nickName() {
        return $('.p-nickname')
    }

    getNickNameText() {
        return this.nickName.getText();
    }
}

module.exports = (login) => new UserPage(login);