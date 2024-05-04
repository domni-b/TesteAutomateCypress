describe('On Linkedin', () => {

  it('I can login', () => {
    cy.visit('https://linkedin.com');
    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('domnikutza@yahoo.com');
    cy.get('#password').type('123456');
    cy.get('.btn__primary--large').click();
  })


})