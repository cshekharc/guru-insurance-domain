Feature: Retrieve Quotation

    Feature Description: This is feature for Retrieve Quotation

    Background: Login using valid credientials
        Given I access the Guru insurance Login page portal
        When I enter a username test@test.com
        And I enter a password test@test
        And I click on the login button
        Then Login is sucessful
        
    Scenario Outline: Retrieve quotation 
        And I click on the Retrieve quotation tab
        And I type retrieve quotation <qnumber>
        And I click on Retrieve button
        Then I should get a quotation information

    Examples:
        | qnumber |
        | 23781   | 