
Feature: Test

Scenario: Test

Given I visit Forms Page
When I provide the username as "Hello"
And I provide the password as "Test"
And I provide the comments as "Hello Test"
Then I should be able to submit the form