class RegistrationPage {
    get url() {
        return 'https://github.com/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=topcarousel&ref_page=%2Fpricing&source=pricing-card-free';
    }

    get username() {
        return $('#user_login');
    }

    set username(value) {
        this.username.setValue(value);
    }

    get email() {
        return $('#user_email');
    }

    set email(value) {
        this.email.setValue(value);
    }

    get password() {
        return $('#user_password');
    }

    set password(value) {
        this.password.setValue(value);
    }

    get preferenceCheckbox(){
        return $('#all_emails');
    }

    clickCheckbox() {
        this.preferenceCheckbox.click();
    }
}

module.exports = new RegistrationPage();