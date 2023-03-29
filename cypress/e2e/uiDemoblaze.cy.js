/// <reference types="cypress" />


describe('DemoBlaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
     });

  it("Creación de un Usuario", () => {
    cy.get('#login2').click();
    cy.wait(2000);
    cy.get('#loginusername').type('admin');
    cy.get('#loginpassword').type('admin');
    cy.get("button[onclick='logIn()']").click();
    cy.wait(3000);
    cy.contains('Welcome admin').should('exist');
    });

  it("Logout de un Usuario dado de alta", () => {
    cy.get('#logout2').click({force: true})   
    
    cy.get('#nameofuser').should('not.have.text', 'Welcome admin')
    });

    // agregar laptop al carrito en DemoBlaze
        
    it('agregar laptop al carrito laptop y comprobar existencia', () => {
        
    cy.get('.list-group a:nth-child(3)').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
    cy.wait(2000)
    cy.contains('Sony vaio').should('exist');
    cy.screenshot('Validación de existencia en carrito');
    });
  })
          
  