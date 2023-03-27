import { Before, Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I access the Guru insurance Login page portal',() =>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

When('I enter a username {word}', (userName) =>{
    cy.get('input[name="email"]').type(userName)
})

And('I enter a password {word}', (password) =>{
    cy.get('input[name="password"]').type(password)
})

And('I click on the login button',()=>{
    cy.get('input[name="submit"]').click()
})
And('I click on the Retrieve quotation tab',()=>{
    cy.get('#ui-id-3').click({force: true})
})

And('I click on Retrieve button',()=>{
    cy.get('#getquote').click({force: true})
})

And('I type retrieve quotation {word}',(qnumber)=>{
    cy.get('[placeholder="identification number"]').type(qnumber)
})

Then('I should get a quotation information',()=>{
    cy.get('b font').should('include.text', 'Retrieve Quotation')
    cy.get('tr td b').eq(6).should('include.text', 'Registration')
    cy.get('table[border ="1"] tr td+td').eq(5).should('include.text', 'AB00A0000')
})