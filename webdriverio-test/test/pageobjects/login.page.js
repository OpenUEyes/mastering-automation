class LoginPage {
    get url() {
        return 'https://github.com/login';
    }

    get name() {
        return $('#login_field');
    }

    set name(value) {
        this.name.setValue(value);
    }

    get password() {
        return $('#password');
    }

    set password(value) {
        this.password.setValue(value);
    }

    get passwordReset() {
        return $('a[href="/password_reset"]');
    }

    clickPasswordReset() {
        this.passwordReset.click();
    }

    get sighIn() {
        return $('input[type="submit"]');
    }

    clickSignIn() {
        this.sighIn.click();
    }
}

module.exports = new LoginPage();