package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utilities.ElementActions;

public class HomePage {


    WebDriver driver;
    ElementActions elementActions;

    //Constructor of page class
    public HomePage(WebDriver driver) {
        this.driver = driver;
        elementActions = new ElementActions(driver);
    }

    //locators - By
    By dressMenuLink = By.xpath("//div[@id='block_top_menu']/ul/li[2]/a");
    By casualDressSubLink = By.xpath("//div[@id='block_top_menu']/ul/li[2]/ul/li[1]/a");
    By casualDressSubCat = By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/a");
    By prodPrintedDress = By.xpath("//*[@id='center_column']/ul/li/div/div[2]/h5/a");
    By productCondition = By.xpath("//p[@id='product_condition']");
    By summerDressSubLink = By.xpath("//div[@id='categories_block_left']/div/ul/li[3]/a");
    By moreInfoLink = By.xpath("//*[@id='center_column']/div/section[2]/h3");

    public void clickDressMenu(){
        elementActions.doClick(dressMenuLink);
    }

    public void clickCasualSubCat(){
        elementActions.doClick(casualDressSubCat);
    }

    public void clickSummerSubCat(){
        elementActions.doClick(summerDressSubLink);
    }

    public String getProductName(){
        return elementActions.doGetText(prodPrintedDress);
    }

    public void clickPrintedDress(){
        elementActions.doClick(prodPrintedDress);
    }

    /******Display summer dress****/

    public void clickPrintedSummerDress(){
        elementActions.doClick(prodPrintedDress);
    }

    public String getProductCondition(){
        return elementActions.doGetText(productCondition);
    }

    public boolean isMoreInfoDisplayed(){
        return elementActions.doIsDisplayed(moreInfoLink);
    }

}
