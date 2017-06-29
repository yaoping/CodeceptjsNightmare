'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    // insert your locators and methods here
    fields: {
        username: '#q_username',
        email: '#q_email'
    },
    filterButton: {css: '#new_q > div.buttons > input[type="submit"]:nth-child(1)'},

    filterBySpecifyKeys(username, email){
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.email, email);
    }
}
