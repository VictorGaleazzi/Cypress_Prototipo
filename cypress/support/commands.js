// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        
        cy.visit('/');
        cy.wait(5000)

        cy.get('.p-card-content').within(() => {
            cy.get('input#username').type(username, { force: true })
            cy.get('input#password').type(password, { force: true })
            cy.get('button[type="submit"]')
            cy.wait(5000)

          })
        // cy.get('.p-card-content').within(() => {
            
        //   })
        //   cy.get('.p-card-content').find('.login-submit').click();
        // cy.get('.p-card-content .row-cpf input#username').type(username)
        // cy.get('.row-cpf:has(label:contains("CPF"))')
        // .find('input')
        // .should('have.value', '')
        // .and('id', 'username')




        // cy.get('.p-card-content')
        // cy.get('input[id="username"]')
        // cy.get('username').eq(2).clear().type(username)
        // cy.get('#password').clear().type(password)
 
        // cy.get('#label').contains('Empresa').should('be.visible')
    },
    {
        cacheAcrossSpecs: true
    })

})