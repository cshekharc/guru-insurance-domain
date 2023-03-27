Feature: Edit profile

    Feature Description: This is feature for Requesting Quotation

    Background: Login using valid credientials
        Given I access the Guru insurance Login page portal
        When I enter a username test@test.com
        And I enter a password test@test
        And I click on the login button
        Then Login is sucessful

    Scenario: Edit profile 
        And I click on edit profile tab
        And I select title as Doctor
        And I enter 'Surname', 'FirstName' and '2341234500' 
        And I select '1995', 'June' and '22' for date of birth
        And I validate licensetype as Full
        And I select occupation as 'Doctor'
        And I enter full address 'ABCD Street' 'New York' 'USA' 'AB2122' 
        Then I enter update button

