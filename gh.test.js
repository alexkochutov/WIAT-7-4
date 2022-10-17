let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
    beforeEach(async () => {
        await page.goto("https://github.com/team");
    }, 20000);

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    await page.waitForTimeout(1000);
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  }, 50000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 3000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 3000);
});

test("Enterprise page has title'", async () => {
  await page.goto("https://github.com/enterprise");
  const title = await page.title();
  expect(title).toEqual('Enterprise · A smarter way to work together · GitHub');
}, 5000);

test("Sponsors page has title'", async () => {
  await page.goto("https://github.com/sponsors");
  const title = await page.title();
  expect(title).toEqual('GitHub Sponsors · GitHub');
}, 5000);

test("Pricing page has title'", async () => {
  await page.goto("https://github.com/pricing");
  const title = await page.title();
  expect(title).toEqual('Pricing · Plans for every developer · GitHub');
}, 5000);