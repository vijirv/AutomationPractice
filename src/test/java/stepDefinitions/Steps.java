package stepDefinitions;

import gherkin.ast.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import pageObjects.ContactusPage;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import utilities.AppConstants;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class Steps extends BaseClass {

    @Before
    public void setUp() throws IOException {
        logger = Logger.getLogger("AutomationPractice");
        PropertyConfigurator.configure("log4j.properties");

        prop = new Properties();
        String path = System.getProperty("user.dir")+"\\src\\test\\java\\config\\config.properties";
        FileInputStream ip = new FileInputStream(path);
        prop.load(ip);

        String browserName = prop.getProperty("browser");
        System.out.println("BrowserName " +browserName);

        if(browserName.equalsIgnoreCase("chrome")){
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
        }
        else if(browserName.equalsIgnoreCase("firefox")){
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        }
        else if(browserName.equalsIgnoreCase("edge")){
            WebDriverManager.edgedriver().setup();
            driver = new EdgeDriver();
        }
        else if(browserName.equalsIgnoreCase("ie")){
            WebDriverManager.iedriver().setup();
            driver = new InternetExplorerDriver();
        }
        else {
            System.out.println("Some problem with the config.properties file");
        }

        logger.info("******** Launching browser*********");

    }

    @After
    public void tearDown(){
        driver.quit();
    }

    /**********Login page  step definitions ***********/

    @Given("User Launch Chrome browser")
    public void user_Launch_Chrome_browser() {
        loginPage = new LoginPage(driver);
    }

    @When("User opens URL {string}")
    public void user_opens_URL(String url) {
        logger.info("******** Opening URL*********");
        driver.get(url);
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    @When("Click on Sign in link")
    public void click_on_Sign_in_link() {
        loginPage.clickSigninLink();
        logger.info("*******Opening Login page ******");
    }

    @When("User enters Email as {string} and Password as {string}")
    public void user_enters_Email_as_and_Password_as(String email, String password) {
        logger.info("******** Providing login details*********");
        loginPage.enterLoginDetails(email,password);
    }

    @When("Click on Login")
    public void click_on_Login() {
        logger.info("******** started login*********");
        loginPage.clickLogin();
    }

    @Then("Account name should be {string}")
    public void account_name_should_be(String accountName) {
        if (driver.getPageSource().contains("Authentication failed.")) {
            driver.close();
            logger.info("******** Login Failed*********");
            Assert.assertTrue(false);
        } else {
            String actualName = loginPage.getAccountName();
            Assert.assertEquals(actualName, actualName);
        }
    }

    @Then("Page Title should be {string}")
    public void page_title_should_be(String pageTitle) {
        if (driver.getPageSource().contains("Authentication failed.")) {
            driver.close();
            logger.info("******** Login Failed*********");
            Assert.assertTrue(false);
        } else {
             Assert.assertEquals(pageTitle, driver.getTitle());
        }
    }

    @When("User click on Sign out link")
    public void user_click_on_Log_out_link() {
        logger.info("******** Click on logout link*********");
        loginPage.doLogout();
    }

    @Then("Close browser")
    public void close_browser() {
        logger.info("********closing browser********");
        driver.quit();
    }

    /********** Contact us page  step definitions ***********/

    @When("Click on Contact us link")
    public void click_on_Contact_us_link() {
        logger.info("*******Opening Contact us page ******");
        contactusPage = new ContactusPage(driver);
        contactusPage.clickContactLink();
    }

    @When("User enters contact as {string} and Subject as {string} and message as {string}")
    public void user_enters_contact_as_and_Subject_as_and_message_as(String email, String subject, String message) {
        logger.info("******** Providing details to customer service*********");
       contactusPage.enterMessageDetails(email,subject,message);
    }

    @When("Click on Send")
    public void click_on_send(){
        contactusPage.clickSubmitMsg();
    }

    @Then("User can view confirmation message {string}")
    public void user_can_view_confirmation_message(String msg) {
        logger.info("******** Your message has been successfully sent to our team.*********");
        String alertText = contactusPage.getAlertMessage();
        Assert.assertEquals(alertText, msg);
    }

    /**********Home page  step definitions ***********/

   @When("Click on Dresses menu option")
    public void click_on_dresses_menu_option(){
        homePage = new HomePage(driver);
        homePage.clickDressMenu();
    }

    @When("Click Casual Dresses sub category")
    public void Click_Casual_Dresses_sub_category(){
        logger.info("*******Opening Casual Dress page ******");
        homePage.clickCasualSubCat();
    }

    @Then("Displayed is {string} on the page")
    public void displayed_is_on_the_page(String prodName){
        String actualPname = homePage.getProductName();
        Assert.assertEquals(actualPname,prodName);
    }

    @When("User choose Printed Dress from the selection")
    public void user_choose_printed_dress_from_the_selection(){
        homePage.clickPrintedDress();
    }

    @Then("Condition is {string} on the page")
    public void condition_is_on_the_page(String condition){
        String prodCondition = homePage.getProductCondition();
        if (prodCondition.contains("Condition New")) {
            Assert.assertEquals(prodCondition,condition);
            System.out.println(prodCondition);
        } else {
            Assert.assertTrue(false);
        }

    }

    @When("Click Summer Dresses sub category")
    public void Click_Summer_Dresses_sub_category(){
        logger.info("*******Opening Summer Dress Page ******");
        homePage.clickSummerSubCat();
    }

    @When("User choose Printed Summer Dress from the selection")
    public void user_choose_printed_summer_dress_from_the_selection(){
        homePage.clickPrintedSummerDress();
    }

    @Then("The More Info section is displayed")
    public void the_more_info_section_is_displayed(){
        boolean isDisplayed = homePage.isMoreInfoDisplayed();
        Assert.assertTrue(isDisplayed);
    }


}
