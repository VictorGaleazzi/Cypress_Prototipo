/// <reference types="cypress" />

describe('primeiro teste', () => {
    it('acessando', () => {
        cy.visit('https://erp-homologacao.viasoft.com.br/')
        cy.get('#username').clear().type('08024041979')
        cy.get('#password').clear().type('testeviasoft')
    }
    )
    it('buscando', () => {
        cy.get('#add-to-cart-button')
        .click()
    })
})



// {
//     cacheAcrossSpecs: true,
// },)