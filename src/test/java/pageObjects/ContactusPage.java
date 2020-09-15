package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import utilities.ElementActions;

public class ContactusPage {

    WebDriver driver;
    ElementActions elementActions;

    //Constructor
    public ContactusPage(WebDriver driver){
        this.driver = driver;
        elementActions = new ElementActions(driver);
    }

    //By Locators
    By contactusLink = By.xpath("//div[@id='contact-link']/a");
    By msgBox = By.id("message");
    By submitMsg = By.id("submitMessage");
    By contactEmail = By.id("email");
    By subjectDropdown = By.id("id_contact");
    By signOut = By.cssSelector("a.logout");
    By alertMsg = By.cssSelector("p.alert.alert-success");


    public void clickContactLink(){
        elementActions.doClick(contactusLink);

    }

    public void enterMessageDetails(String email, String subjecthdr, String subjectmsg){
       elementActions.doSendKeys(contactEmail,email);
       elementActions.doSelectDropdown(subjectDropdown,subjecthdr);
       elementActions.doSendKeys(msgBox,subjectmsg);
    }
    public void clickSubmitMsg(){
        elementActions.doClick(submitMsg);
    }

    public String getAlertMessage(){
       return elementActions.doGetText(alertMsg);
    }

}
