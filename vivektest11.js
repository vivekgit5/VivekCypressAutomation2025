describe('Calendar End-to-End Testing', () => {

  it('Selects a specific date dynamically from the calendar', () => {

    // --- Test configuration ---
    cy.viewport(1221, 687); // Set consistent viewport for test stability

    const day = 20;
    const monthNumber = 6; // June (1-indexed)
    const year = 2027;

    // Helper array for month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthName = monthNames[monthNumber - 1];

    // --- Test steps ---

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    // Wait for the page to load react components
    cy.get('div.react-date-picker__inputGroup', { timeout: 10000 }).should('be.visible').click();

    // Navigate to decade view to pick the correct year
    cy.get('.react-calendar__navigation__label').click(); // Go to year view
    cy.get('.react-calendar__navigation__label').click(); // Go to decade view

    // Select year dynamically
    cy.contains('button.react-calendar__tile', year).click();

    // Select month dynamically
    cy.get(`abbr[aria-label="${monthName} ${year}"]`).click();

    // Select day dynamically
    cy.get(`abbr[aria-label="${monthName} ${day}, ${year}"]`).click();

  });

});
