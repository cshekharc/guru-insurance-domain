import { Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

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

And('Login is sucessful',()=>{
    cy.get('[value="Log out"]').should('be.visible')
})

Then('Logout from application',()=>{
    cy.get('[value="Log out"]').click({force : true})
    cy.get('[class="content"] > h3').should('include.text', 'Login')
})