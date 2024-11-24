/// <reference types="cypress" />
import 'cypress-each';
import routes from '../support/routes.json';
import cypressIDs from '../support/cypress_ids.json';

import { ValidLogins } from '../support/logins';
import { InvalidLogins } from '../support/logins';
import { loginWith } from 'cypress/support/helperCommands';


describe('Login with valid credentials', () => {
    // sets the test title depending on what object entry you use
    const testTitle: TestTitleFn<{ username: string, password: string }> | string = (obj: {
        username: string;
        password: string;
    }) => `should allow me to login successfully if I use ${obj.username} for my username and ${obj.password} for my password`

    // iterates through login objects and logs in with the values
    it.each(Object.values(ValidLogins))(testTitle, (value) => {
        cy.visit('/');
        loginWith(value.username, value.password)
        cy.url().should('contain', routes.inventory);
    })
});

describe('Login with Invalid credentials', () => {
    // sets the test title depending on what object entry you use
    const testTitle: TestTitleFn<{ username: string, password: string }> | string = (obj: {
        username: string;
        password: string;
    }) => `shouldn't allow me to login successfully if I use ${obj.username} for my username and ${obj.password} for my password`

    // iterates through login objects and logs in with the values
    it.each(Object.values(InvalidLogins))(testTitle, (value) => {
        cy.visit('/');
        loginWith(value.username, value.password)
        cy.get(`[data-test=${cypressIDs.labels.error}]`).contains(value.errorMessage);
        cy.url().should('not.contain', routes.inventory);
    });
});