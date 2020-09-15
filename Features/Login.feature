Feature: AutomationPractice - Customer

  Background: Below are common steps for every scenario
    Given User Launch Chrome browser
    When User opens URL "http://automationpractice.com/index.php"

  Scenario Outline: Successful Login with Valid Credentials
    When Click on Sign in link
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Login
    Then Account name should be "Test Test"
    When User click on Sign out link
    Then Page Title should be "Login - My Store"
    And Close browser

    Examples:
      | email | password |
      | viji2903@gmail.com	|	Password101 |
      | negativetest1765@gmail.com	|	NegativeTest100 |

  Scenario: Send message to the customer service
    When Click on Contact us link
    And User enters contact as "testmessage@test.com" and Subject as "Customer service" and message as "Test message"
    And Click on Send
    Then User can view confirmation message "Your message has been successfully sent to our team."
    And Close browser

  Scenario: Category filtering
    When Click on Dresses menu option
    And Click Casual Dresses sub category
    Then Displayed is "Printed Dress" on the page

  Scenario: Display Casual dress
    When Click on Dresses menu option
    And Click Casual Dresses sub category
    When User choose Printed Dress from the selection
    Then Condition is "Condition New" on the page

  Scenario: Display summer dress
    When Click on Dresses menu option
    And Click Summer Dresses sub category
    When User choose Printed Summer Dress from the selection
    Then The More Info section is displayed




