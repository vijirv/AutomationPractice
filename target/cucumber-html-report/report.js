$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "AutomationPractice - Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Account name should be \"Test Test\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Sign out link",
  "keyword": "When "
});
formatter.step({
  "name": "Page Title should be \"Login - My Store\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "viji2903@gmail.com",
        "Password101"
      ]
    },
    {
      "cells": [
        "negativetest1765@gmail.com",
        "NegativeTest100"
      ]
    }
  ]
});
formatter.background({
  "name": "Below are common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on Sign in link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Sign_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"viji2903@gmail.com\" and Password as \"Password101\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account name should be \"Test Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.account_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sign out link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Login - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Below are common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on Sign in link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Sign_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"negativetest1765@gmail.com\" and Password as \"NegativeTest100\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account name should be \"Test Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.account_name_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.Steps.account_name_should_be(Steps.java:110)\r\n\tat ✽.Account name should be \"Test Test\"(file:Features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Sign out link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Login - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Below are common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send message to the customer service",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Contact us link",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_Contact_us_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters contact as \"testmessage@test.com\" and Subject as \"Customer service\" and message as \"Test message\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_contact_as_and_Subject_as_and_message_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Send",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_send()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view confirmation message \"Your message has been successfully sent to our team.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Below are common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Category filtering",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Dresses menu option",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_dresses_menu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Casual Dresses sub category",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_Casual_Dresses_sub_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Displayed is \"Printed Dress\" on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.displayed_is_on_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Below are common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Display Casual dress",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Dresses menu option",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_dresses_menu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Casual Dresses sub category",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_Casual_Dresses_sub_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose Printed Dress from the selection",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_choose_printed_dress_from_the_selection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Condition is \"Condition New\" on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.condition_is_on_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Below are common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://automationpractice.com/index.php\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Display summer dress",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Dresses menu option",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.click_on_dresses_menu_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Summer Dresses sub category",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Click_Summer_Dresses_sub_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose Printed Summer Dress from the selection",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_choose_printed_summer_dress_from_the_selection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The More Info section is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_more_info_section_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});