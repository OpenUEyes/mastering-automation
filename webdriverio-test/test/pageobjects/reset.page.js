class ResetPage {
    get url() {
        return 'https://github.com/password_reset';
    }

    get email() {
        return $('#email_field');
    }

    set email(value) {
        this.email.setValue(value);
    }

    get submit() {
        return $('input[type="submit"]');
    }

    clickSubmit() {
        this.submit.click();
    }

    get error() {
        return $('div.flash-error');
    }
}

module.exports = new ResetPage();