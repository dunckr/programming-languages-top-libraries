const nock = require("nock");

const php = require(".");

nock("https://packagist.org/explore")
    .get('/popular')
    .replyWithFile(200, `${__dirname}/__fixtures__/popular.html`);
nock("https://packagist.org/packages")
    .get(/.*/)
    .times(200)
    .replyWithFile(200, `${__dirname}/__fixtures__/api.json`);

describe("PHP", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await php();
    expect(libraries).toEqual([
      {
        downloads: 209569,
        link: "/packages/symfony/polyfill-mbstring",
        name: "symfony/polyfill-mbstring"
      },
      {
        downloads: 209569,
        link: "/packages/psr/log",
        name: "psr/log"
      },
      {
        downloads: 209569,
        link: "/packages/symfony/console",
        name: "symfony/console"
      },
      {
        downloads: 209569,
        link: "/packages/symfony/event-dispatcher",
        name: "symfony/event-dispatcher"
      },
      {
        downloads: 209569,
        link: "/packages/doctrine/instantiator",
        name: "doctrine/instantiator"
      },
      {
        downloads: 209569,
        link: "/packages/symfony/debug",
        name: "symfony/debug"
      },
      {
        downloads: 209569,
        link: "/packages/psr/http-message",
        name: "psr/http-message"
      },
      {
        downloads: 209569,
        link: "/packages/monolog/monolog",
        name: "monolog/monolog"
      },
      {
        downloads: 209569,
        link: "/packages/symfony/finder",
        name: "symfony/finder"
      },
      {
        downloads: 209569,
        link: "/packages/paragonie/random_compat",
        name: "paragonie/random_compat"
      },
      {
        downloads: 209569,
        link: "/packages/guzzlehttp/psr7",
        name: "guzzlehttp/psr7"
      },
      {
        downloads: 209569,
        link: "/packages/symfony/process",
        name: "symfony/process"
      },
      {
        downloads: 209569,
        link: "/packages/symfony/polyfill-ctype",
        name: "symfony/polyfill-ctype"
      },
      {
        downloads: 209569,
        link: "/packages/guzzlehttp/guzzle",
        name: "guzzlehttp/guzzle"
      },
      {
        downloads: 209569,
        link: "/packages/doctrine/inflector",
        name: "doctrine/inflector"
      }
    ]);
  });
});
