package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utilities.ElementActions;

public class LoginPage {

    WebDriver driver;
    ElementActions elementActions;

    //Constructor of page class
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        elementActions = new ElementActions(driver);
    }

    //locators - By
    By signinLink = By.linkText("Sign in");
    By emailId = By.id("email");
    By password = By.id("passwd");
    By signinBtn = By.id("SubmitLogin");
    By signOut = By.cssSelector("a.logout");
    By accountName = By.xpath("//a[@class='account']/span");

    public void enterLoginDetails(String uname, String pwd){
        elementActions.doSendKeys(emailId,uname);
        elementActions.doSendKeys(password,pwd);
    }

    public void clickSigninLink(){
        elementActions.doClick(signinLink);
    }
    public void clickLogin(){
        elementActions.doClick(signinBtn);
    }

    public void doLogout(){
        elementActions.doClick(signOut);

    }

    public String getAccountName(){
        return elementActions.doGetText(accountName);
    }

}
