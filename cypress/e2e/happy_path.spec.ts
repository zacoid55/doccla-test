/// <reference types="cypress" />
import 'cypress-each';
import routes from '../support/routes.json';
import cypressIDs from '../support/cypress_ids.json';
import strings from '../support/strings.json';
import { ValidLogins } from '../support/logins';

import { loginWith, enterDetails } from 'cypress/support/helperCommands';

const validUsername = ValidLogins.STANDARD_USERNAME_AND_PASSWORD.username
const validPassword = ValidLogins.STANDARD_USERNAME_AND_PASSWORD.password

describe('Login and purchase items successfully', () => {

    it('allows me to successfully login, add items to my cart and checkout', () => {
        // navigate to website and login
        cy.visit('/');
        loginWith(validUsername, validPassword)
        cy.url().should('contain', routes.inventory);

        // add three items to your basket and check for count
        cy.get(`[id^=${cypressIDs.buttons.addBackpackToCart}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.addBikeLightToCart}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.addOnesieToCart}]`).click();
        cy.get(`[id^=${cypressIDs.links.shoppingCart}]`).contains('3');

        // go to the checkout
        cy.get(`[id^=${cypressIDs.links.shoppingCart}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.checkout}]`).click();

        enterDetails(
            strings.names.firstName, 
            strings.names.secondName,
            strings.postCodes.postCode
        )

        // finish the transaction and check for success
        cy.get(`[id^=${cypressIDs.buttons.continue}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.finish}]`).click();
        cy.get(`[id^=${cypressIDs.containers.checkoutComplete}]`).contains(strings.expected.checkoutComplete);
    })
});