Feature: Guru Insurance Logout 

    Feature Description: This feature files takes cares of login scenarios

    Scenario: Logout from application
        Given I access the Guru insurance Login page portal
        When I enter a username test@test.com
        And I enter a password test@test
        And I click on the login button
        And Login is sucessful
        Then Logout from application