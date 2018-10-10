const nock = require("nock");

const php = require(".");

nock("https://packagist.org/explore")
  .get("/popular")
  .replyWithFile(200, `${__dirname}/__fixtures__/popular.html`);
nock("https://packagist.org/packages")
  .get(/.*/)
  .times(200)
  .replyWithFile(200, `${__dirname}/__fixtures__/api.json`);

describe("PHP", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await php();
    expect(libraries.length).toEqual(10);
    expect(libraries).toEqual([
      {
        downloads: 209569,
        name: "symfony/polyfill-mbstring",
        url: "https://packagist.org/packages/symfony/polyfill-mbstring"
      },
      {
        downloads: 209569,
        name: "psr/log",
        url: "https://packagist.org/packages/psr/log"
      },
      {
        downloads: 209569,
        name: "symfony/console",
        url: "https://packagist.org/packages/symfony/console"
      },
      {
        downloads: 209569,
        name: "symfony/event-dispatcher",
        url: "https://packagist.org/packages/symfony/event-dispatcher"
      },
      {
        downloads: 209569,
        name: "doctrine/instantiator",
        url: "https://packagist.org/packages/doctrine/instantiator"
      },
      {
        downloads: 209569,
        name: "symfony/debug",
        url: "https://packagist.org/packages/symfony/debug"
      },
      {
        downloads: 209569,
        name: "psr/http-message",
        url: "https://packagist.org/packages/psr/http-message"
      },
      {
        downloads: 209569,
        name: "monolog/monolog",
        url: "https://packagist.org/packages/monolog/monolog"
      },
      {
        downloads: 209569,
        name: "symfony/finder",
        url: "https://packagist.org/packages/symfony/finder"
      },
      {
        downloads: 209569,
        name: "paragonie/random_compat",
        url: "https://packagist.org/packages/paragonie/random_compat"
      }
    ]);
  });
});
