/// <reference types="cypress" />
import cypressIds from './cypress_ids.json';

export function loginWith(username: string, password: string) {
    cy.get(`[id^=${cypressIds.textFields.username}]`).first().clear().type(username);
    cy.get(`[id^=${cypressIds.textFields.password}]`).first().clear().type(password);

    cy.get(`[id^=${cypressIds.buttons.login}]`).click();
}

export function enterDetails(firstName: string, secondName: string, postCode: string) {
    cy.get(`[id^=${cypressIds.textFields.firstName}]`).first().clear().type(firstName);
    cy.get(`[id^=${cypressIds.textFields.secondName}]`).first().clear().type(secondName);
    cy.get(`[id^=${cypressIds.textFields.postCode}]`).first().clear().type(postCode);
}