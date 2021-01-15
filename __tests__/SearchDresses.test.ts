import {ThredUpPage} from "./PageObjects/ThredUpPage";


  describe("Login and Logout funtionality works", () => {
    const page = new ThredUpPage({ browser: "chrome" });
    afterAll(async () => {
     page.driver.quit();
    });

 

  test('SmartLink login', async () => {
    await page.driver.get(page.url)
    //await page.driver.wait(until.elementLocated(By.xpath('//div[@class="u-flex u-flex-col u-bg-white u-rounded-4 u-m-auto u-relative _1ivBsHCOh3N7wt6s01Kjqj _1o5gMN69zQnHFzMZNJfAGX"]')))
    await page.clickAndEnter(page.email, "george@gmail.com");
    // clicks start shopping button
    await page.click(page.startShopping);
    await page.click(page.addPassword);
    await page.clickAndEnter(page.setPassword, "456789")
    await page.driver.sleep(5000)

    test('Search for Dresses', async () => {
      await page.clickAndEnter(page.searchBar, "dresses")
    
    })
  });
});