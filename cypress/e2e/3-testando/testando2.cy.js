/// <reference types="cypress" />

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.login()
});

describe('Rotina simples de cadastro', () => {

    it('Cadastrando Marca de Item', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.get('.toolbar-menu').find('button').click()
        cy.wait(1000)

        cy.get('.itens-menu-principal').contains('Cadastros').click()
        cy.get('.item').contains('Itens').should('be.visible')
        cy.wait(1000)

        cy.get('.item').contains('Itens').click()
        cy.get('[ng-reflect-router-link="/fiscal/marca"]').contains('Marca').should('be.visible')
        cy.wait(1000)

        cy.get('[ng-reflect-router-link="/fiscal/marca"]').contains('Marca').click()
        cy.get('.breadcrumb-right').find('button').contains('Novo').should('be.visible')
        cy.wait(1000)

        cy.get('.breadcrumb-right').find('button').contains('Novo').click()
        cy.get('span[title="Marca Item"]').should('be.visible')
        cy.wait(1000)

        cy.get('#descricao').type('Primeiro Cadastro de Marca Teste Automatizado')

        cy.wait(1000)

        cy.get('.breadcrumb-right').find('button').contains('Salvar').click()
        cy.get('app-novo').find('button').contains('Novo').should('be.visible')
        // cy.get('role="alert"').find('span').contains('Salvo com sucesso')

        cy.wait(5000)
        cy.get('.toolbar-menu').find('button').click()
    }); 
})
