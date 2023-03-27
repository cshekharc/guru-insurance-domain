Feature: Requesting Quotation

    Feature Description: This is feature for Requesting Quotation

    Background: Login using valid credientials
        Given I access the Guru insurance Login page portal
        When I enter a username test@test.com
        And I enter a password test@test
        And I click on the login button
        Then Login is sucessful
        
    Scenario Outline: Requesting new quatation with data
        And I click on the requesting quotation
        And I select <entry> for quotation breakdown
        And I fill up the incident details as <sequence>
        And I fill up the registration details as <vehicle_number>
        And I fill up the milage details as <milageOfVehical>
        And I fill up the vehicle price as <price>
        And I select year as <year>
        And I select month as <month>
        And I select date as <date>
        And I click on save quotation button
        Then I should get a save quotation notification

        Examples:
            | entry | sequence | vehicle_number | milageOfVehical | price  | year | month | date | 
            | 3     | first    | AB00A0000      | 21              | 500000 | 2018 | June  | 22   |
