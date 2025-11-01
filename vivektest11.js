describe('Calendar end to end testing', () =>{

    it('calendar testcase', function(){

        cy.viewport(1221, 687);
        const day = 20
        const month_number = 6
        const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
]
const monthName = monthNames[month_number - 1]
        const year = 2027
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.wait(4000)
        cy.get('div.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()

        //cy.contains('button.react-calendar__tile', 2027).click() hard-coded year
        cy.contains('button.react-calendar__tile', year).click()

        //cy.get('abbr[aria-label="June 2027"]').click() hard-coded month and year
        cy.get(`abbr[aria-label="${monthName} ${year}"]`).click()

        //cy.get('abbr[aria-label="June 20, 2027"]').click() hard-coded month, day and year
        cy.get(`abbr[aria-label="${monthName} ${day}, ${year}"]`).click()


        //cy.get('.react-calendar__tile').eq(month_number-1).click()
        //cy.get('.react-calendar__navigation__label').click()

    })

})