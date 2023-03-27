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

And('I click on profile tab',()=>{
    cy.get('#ui-id-4').click({force: true})
})

And('I validate the profile', ()=>{
    let profile = ['Title:Firstname:Surname:Phone:Dataofbirth:License type:License period:Occupation:Driver History:']
    cy.get('#tabs-4> p > strong').each((ele, index, list)=>{
        
        cy.wrap(list).should('contain.text', profile[index])
        // expect(ele.text()).to.include('[Title, Firstname, Surname, Phone, Dataofbirth, License type, License period, Occupation, Driver History, ADDRESS]')
    })
})