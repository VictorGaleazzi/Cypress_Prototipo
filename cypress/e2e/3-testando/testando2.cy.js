/// <reference types="cypress" />

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.login('08024041979', 'testeviasoft')
    cy.visit('/')
});

it('cypress login', () => {


});