const nock = require("nock");

const csharp = require(".");

nock("https://www.nuget.org/stats")
  .get("/packages")
  .replyWithFile(200, `${__dirname}/__fixtures__/packages.html`);
nock("https://www.nuget.org/packages")
  .get(/.*/)
  .times(200)
  .replyWithFile(200, `${__dirname}/__fixtures__/package.html`);

describe("C#", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await csharp();
    expect(libraries.length).toEqual(10);
    expect(libraries).toEqual([
      {
        downloads: "151813484",
        link: "/packages/newtonsoft.json/",
        name: "newtonsoft.json"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.logging.abstractions/",
        name: "microsoft.extensions.logging.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.hosting.server.abstractions/",
        name: "microsoft.aspnetcore.hosting.server.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.hosting.abstractions/",
        name: "microsoft.aspnetcore.hosting.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.configuration.abstractions/",
        name: "microsoft.extensions.configuration.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.http.features/",
        name: "microsoft.aspnetcore.http.features"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.http.abstractions/",
        name: "microsoft.aspnetcore.http.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.options/",
        name: "microsoft.extensions.options"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.primitives/",
        name: "microsoft.extensions.primitives"
      },
      {
        downloads: "151813484",
        link:
          "/packages/microsoft.extensions.dependencyinjection.abstractions/",
        name: "microsoft.extensions.dependencyinjection.abstractions"
      }
    ]);
  });
});
