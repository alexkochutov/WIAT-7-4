let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://netology.ru");
}, 50000);

afterEach(() => {
  page.close();
});

describe("Netology page tests", () => {
  test("Main page has title", async () => {
    const title = await page.title();
    expect(title).toEqual('Нетология — обучение современным профессиям онлайн');
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("https://netology.ru/marketing");
  }, 3000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".src-shared-components-Header--loginLink--aIJO3";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Войти")
  }, 3000);
});