// write tests here
describe('Inputs and submit button', () => {
    it('can navigate to the sithtt', () => {
      // this is setup for the actual test
      cy.visit('http://localhost:3000/')
      // assert that the site we landed at is the correct one
      cy.url()
      .should('include', 'localhost')
    })
  
    it('submit button is disabled', () => {
      // grab the element
      // check that it's actually disabled
      cy.get('#submitBtn').should('be.disabled')
    })
  
    it('can type a text for a new name', () => {
      // grab element (in itself is a test)
      // type something with cy
      // assert that the value of the input is the thing we typed
      cy.get('input[name="name"]')
        .type('Shadow')
        .should('have.value', 'Shadow')
    })
  
    it("Can type in a new email", () => {
      cy.get('input[name="email"]')
        .type("derp@derp.com")
        .should('have.value', "derp@derp.com")
    })

    it("Can type in a new password", () => {
        cy.get('input[name="password"]')
          .type("password")
          .should('have.value', "password")
      })
  

    it("Can check checkbox", () => {
        cy.get('input[name="terms"]').check()
        .should('be.checked')
      })
  
      it('submit button is no longer disabled', () => {
        // grab the element
        // check that it's actually disabled
        cy.get('#submitBtn').should('not.be.disabled')
      })

    it('Can submit filled out form', () => {
        cy.get('#submitBtn').click()
    })
    })