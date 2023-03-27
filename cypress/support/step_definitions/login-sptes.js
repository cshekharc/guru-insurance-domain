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

Then('Login is sucessful',()=>{
    cy.get('[value="Log out"]').should('be.visible')
})

Then('Login is {word}',(message)=>{
    cy.get('[value="Log out"]').should('not.exist')
})
