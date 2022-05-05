describe('Verify user can enter zip code and select 50 mileage and generate expected results', () => {
  it('Visits the Cars.com', () => {
    cy.visit('https://www.cars.com/shopping/advanced-search/')

    //cy.contains('sds-text-field').click()
    
     // Should be on a new URL which includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
      cy.get('input#desktop-location-zip')
      .type('{del}{selectall}{backspace}')
      .type(75051)
      .should('have.value', '75051')

      cy.get('select#desktop-location-select')
      .select('50')
      .should('have.value', '50')

      cy.get('button[class$=desktop-form-button]')
      .click()

  })
})

describe('Verify user cannot enter 6 numerical values for the zip code', () => {
  it('Visits the Cars.com', () => {
    cy.visit('https://www.cars.com/shopping/advanced-search/')

    //cy.contains('sds-text-field').click()
    
     // Should be on a new URL which includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
      cy.get('input#desktop-location-zip')
      .type('{del}{selectall}{backspace}')
      .type(750517)
      .should('have.value', '75051')

      cy.get('button[class$=desktop-form-button]')
      .click()

  })
})