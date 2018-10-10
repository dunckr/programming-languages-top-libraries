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
        name: "newtonsoft.json",
        url: "https://www.nuget.org/packages/newtonsoft.json/"
      },
      {
        downloads: "151813484",
        name: "microsoft.extensions.logging.abstractions",
        url:
          "https://www.nuget.org/packages/microsoft.extensions.logging.abstractions/"
      },
      {
        downloads: "151813484",
        name: "microsoft.aspnetcore.hosting.server.abstractions",
        url:
          "https://www.nuget.org/packages/microsoft.aspnetcore.hosting.server.abstractions/"
      },
      {
        downloads: "151813484",
        name: "microsoft.aspnetcore.hosting.abstractions",
        url:
          "https://www.nuget.org/packages/microsoft.aspnetcore.hosting.abstractions/"
      },
      {
        downloads: "151813484",
        name: "microsoft.extensions.configuration.abstractions",
        url:
          "https://www.nuget.org/packages/microsoft.extensions.configuration.abstractions/"
      },
      {
        downloads: "151813484",
        name: "microsoft.aspnetcore.http.features",
        url:
          "https://www.nuget.org/packages/microsoft.aspnetcore.http.features/"
      },
      {
        downloads: "151813484",
        name: "microsoft.aspnetcore.http.abstractions",
        url:
          "https://www.nuget.org/packages/microsoft.aspnetcore.http.abstractions/"
      },
      {
        downloads: "151813484",
        name: "microsoft.extensions.options",
        url: "https://www.nuget.org/packages/microsoft.extensions.options/"
      },
      {
        downloads: "151813484",
        name: "microsoft.extensions.primitives",
        url: "https://www.nuget.org/packages/microsoft.extensions.primitives/"
      },
      {
        downloads: "151813484",
        name: "microsoft.extensions.dependencyinjection.abstractions",
        url:
          "https://www.nuget.org/packages/microsoft.extensions.dependencyinjection.abstractions/"
      }
    ]);
  });
});
