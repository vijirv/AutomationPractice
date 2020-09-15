package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".//Features/",
        glue = "stepDefinitions",
        dryRun = false,
        monochrome = true,
        plugin = {"pretty",
                "html:target/cucumber-html-report",
                "json:target/cucumber.json",
                "junit:target/cucumber.xml"}
        //tags ={"@sanity"}
)

public class TestRun {

}
