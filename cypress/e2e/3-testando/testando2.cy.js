/// <reference types="cypress" />

beforeEach(() => {

    cy.login('08024041979', 'testeviasoft')
});

it('Navegando até cadastrps', () => {
    cy.visit('/')
    // cy.login('08024041979', 'testeviasoft')
    // cy.get('.toolbar-menu').focus()
    cy.wait(5000)
});