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

And('I click on edit profile tab',()=>{
    cy.get('#ui-id-5').click({force: true})
})

And('I select title as Doctor',()=>{
    cy.get('#user_title').select('Doctor')
})

And('I enter {string}, {string} and {string}', (surname, firstname, phoneNumber)=>{
    cy.get('#user_surname').type(surname)
    cy.get('#user_firstname').type(firstname)
    cy.get('#user_phone').type(phoneNumber)
})

And('I select {string}, {string} and {string} for date of birth',(year, month, date)=>{
    cy.get('#user_dateofbirth_1i').select(year)
    cy.get('#user_dateofbirth_2i').select(month)
    cy.get('#user_dateofbirth_3i').select(date)
})

And('I validate licensetype as Full',()=>{
    cy.get('#user_licencetype_t').should('be.checked')
})

And('I select occupation as {string}',(occupation)=>{
    cy.get('#user_occupation_id').select(occupation)
})

And('I enter full address {string} {string} {string} {string}', (street, city, country, postCode)=>{
    cy.get('#user_address_attributes_street').type(street)
    cy.get('#user_address_attributes_city').type(city)
    cy.get('#user_address_attributes_county').type(country)
    cy.get('#user_address_attributes_postcode').type(postCode)
})

And('I enter update button', () => {
    cy.get('#edit_user_ > .actions > .btn').click()
})
