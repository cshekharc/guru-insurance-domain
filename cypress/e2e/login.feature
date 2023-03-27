Feature: Guru Insurance Login Page

    Feature Description: This feature files takes cares of login scenarios

    Scenario: Login using valid credientials
        Given I access the Guru insurance Login page portal
        When I enter a username test@test.com
        And I enter a password test@test
        And I click on the login button
        Then Login is sucessful

    Scenario Outline: Test Login with invalid credentials 
        Given I access the Guru insurance Login page portal
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then Login is unsucessfull

        Examples:
            | username        | password    |
            | test1@test.com  | test@test   |
            | test@test.com   | test@test11 |

