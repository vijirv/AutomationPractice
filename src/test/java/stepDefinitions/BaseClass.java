package stepDefinitions;

import org.openqa.selenium.WebDriver;
import pageObjects.ContactusPage;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import org.apache.log4j.Logger;

import java.util.Properties;


public class BaseClass {
    public WebDriver driver;
    public Properties prop;
    public LoginPage loginPage;
    public HomePage homePage;
    public ContactusPage contactusPage;
    public static Logger logger;



}
