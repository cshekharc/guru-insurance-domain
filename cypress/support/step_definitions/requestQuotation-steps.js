import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'


Given('I access the Guru insurance Login page portal', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})
When('I enter a username {word}', (userName) => {
    cy.get('input[name="email"]').type(userName)
})
And('I enter a password {word}', (password) => {
    cy.get('input[name="password"]').type(password)
})
And('I click on the login button', () => {
    cy.get('input[name="submit"]').click()
})
And('Login is sucessful', () => {
    cy.get('[value="Log out"]').should('be.visible')
})
And('I click on the requesting quotation', () => {
    cy.get('#ui-id-2').click({ force: true }) // Clicking on requesting quotation
    cy.get('#tabs-2> h2').should('include.text', 'Request a quotation')
})
When('I select {word} for quotation breakdown', (entry) => {
    cy.get('#quotation_breakdowncover').select(entry) // selecting 3rd value
})
And('I fill up the incident details as {word}', (sequence) => {
    cy.get('#quotation_incidents').type(sequence) // filling up the details for incedent
})
And('I fill up the registration details as {word}', (vehicle_number) => {
    cy.get('[name="registration"]').type(vehicle_number) // filling up the details for registration detials
})
And('I fill up the milage details as {word}', (milageOfVehical) => {
    cy.get('[name="mileage"]').type(milageOfVehical)
})
And('I fill up the vehicle price as {word}', (price) => {
    cy.get('#quotation_vehicle_attributes_value').type(price) // filling up the details for vehicle value

})
// And('I fill up the parking location details {word}', (locationOption) => {
//     cy.get('[name="parkinglocation"]').select(locationOption)
// })
And('I select year as {word}', (year) => {
    cy.get('[name="year"]').select(year)
})
And('I select month as {word}', (month) => {
    cy.get('[name="month"]').select(month)
})
And('I select date as {word}', (date) => {
    cy.get('[name="date"]').select(date)
})
And('I click on save quotation button', () => {
    cy.get('[name="submit"]').click({ force: true }) // submitting details
    cy.wait(1000)
})
Then('I should get a save quotation notification', () => {
    cy.get(cy.get('body> b').eq(0).should('have.text', 'You have saved this quotation!')) // 'You have saved this quotation!'
})