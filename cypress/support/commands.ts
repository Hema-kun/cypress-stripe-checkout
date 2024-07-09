import 'cypress-iframe';

Cypress.Commands.add("visitUrl", () => {

    cy.visit(Cypress.env("url"));

});

Cypress.Commands.add("stripeEndpoint", () => {

    cy.intercept('POST', 'https://m.stripe.com/*').as("stripe");
        cy.wait('@stripe').should(xhr => {		
            expect(xhr.response.statusCode).to.equal(200);
        });

});