describe('Exemplu unde', () => {

//   // Test verificare segment din URL
//  it('verfic daca un URL contine ceva', () => {
//     cy.visit('https://www.digi24.ro/stiri/externe/rusia-ameninta-occidentul-dupa-ce-marea-britanie-a-dat-unda-verde-ucrainei-sa-atace-teritoriul-rus-e-o-escaladare-directa-2781745');
//     cy.url().should('include', '/stiri/') //  verifica un segment
// })

// // Testul cu delay
// it('asteapta 10 secunde', () => {
//  cy.visit('http://www.google.com');

//  cy.get('#L2AGLb').click();

//  cy.wait(10000); // 10 secunde 1000 = 1 sec

//  cy.get('.gLFyf').type('Au trecut 10 secunde')
// })

// Testul cu seletor de timp atribut
// it('selectez folosind un atribut', () => {
//   cy.visit('http://www.google.com');

//   cy.get('#L2AGLb').click();

//   cy.get('[alt="Google"]').should('be.visible'); //Selector atribut alt + assertion cu visible
// })

// //Testul screenshot pagina
// it('fac un screenshot la pagina', () => {
// cy.visit('http://www.google.com');

// cy.screenshot(); // Face un screenshot intr-un folder default
// })

// Testul constanta si verificare continut input
// it('verific o valoare din input', () => {

// cy.visit('http://google.com');

// cy.get('#L2AGLb').click();

// const googleSearch = cy.get('.gLFyf'); // constanta

// googleSearch.type('123');
// googleSearch.should('have.value', '123'); // Assertion contine textul

// Testul verifica existenta unei clase pe un element selectat
// it('verific o valoare de input', () => {

// cy.visit('http://www.libris.ro/');

// cy.get('#autoCompleteButton').should('have.class', 'onSearchClick'); // Exista clasa pe buton?

// })

// })