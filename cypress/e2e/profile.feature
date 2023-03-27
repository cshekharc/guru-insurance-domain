Feature: Profile validation 

    Feature Description: This is feature for Requesting Quotation

    Background: Login using valid credientials
        Given I access the Guru insurance Login page portal
        When I enter a username test@test.com
        And I enter a password test@test
        And I click on the login button
        Then Login is sucessful

    Scenario: Profile 
        And I click on profile tab
        Then I validate the profile
        