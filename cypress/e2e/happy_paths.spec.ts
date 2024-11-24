/// <reference types="cypress" />
import 'cypress-each';
import routes from '../support/routes.json';
import cypressIDs from '../support/cypress_ids.json';
import strings from '../support/strings.json';

import { loginWith, enterDetails } from 'cypress/support/helperCommands';

describe('Login and purchase items successfully', () => {

    it('allows me to successully login, add items to my cart and checkout', () => {
        // navigate to website and login
        cy.visit('/');
        loginWith(strings.usernames.validUsername, strings.passwords.validPassword)
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
            strings.postCodes.validPostCode
        )

        // finish the transatction and check for success
        cy.get(`[id^=${cypressIDs.buttons.contine}]`).click();
        cy.get(`[id^=${cypressIDs.buttons.finish}]`).click();
        cy.get(`[id^=${cypressIDs.containers.checkoutComplete}]`).contains(strings.expected.chekoutComplete);
    })
});