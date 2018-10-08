const fetchMock = require("fetch-mock");
const fs = require("fs");
const path = require("path");

const csharp = require(".");
const dependenciesFixture = fs
  .readFileSync(path.join(__dirname, "./__fixtures__/packages.html"))
  .toString();
const dependencyFixture = fs
  .readFileSync(path.join(__dirname, "./__fixtures__/package.html"))
  .toString();

fetchMock.get("glob:https://www.nuget.org/stats/packages", dependenciesFixture);
fetchMock.get("glob:https://www.nuget.org/packages/*", dependencyFixture);

describe("C#", () => {
  it("should request the most depended on libraries", async () => {
    const libraries = await csharp();
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
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.net.http.headers/",
        name: "microsoft.net.http.headers"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.fileproviders.abstractions/",
        name: "microsoft.extensions.fileproviders.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.http.extensions/",
        name: "microsoft.aspnetcore.http.extensions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.webutilities/",
        name: "microsoft.aspnetcore.webutilities"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.http/",
        name: "microsoft.aspnetcore.http"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.logging/",
        name: "microsoft.extensions.logging"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.netcore.platforms/",
        name: "microsoft.netcore.platforms"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.configuration/",
        name: "microsoft.extensions.configuration"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.dependencymodel/",
        name: "microsoft.extensions.dependencymodel"
      },
      {
        downloads: "151813484",
        link: "/packages/system.net.http/",
        name: "system.net.http"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.objectpool/",
        name: "microsoft.extensions.objectpool"
      },
      {
        downloads: "151813484",
        link: "/packages/system.diagnostics.diagnosticsource/",
        name: "system.diagnostics.diagnosticsource"
      },
      {
        downloads: "151813484",
        link: "/packages/system.componentmodel.annotations/",
        name: "system.componentmodel.annotations"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.filesystemglobbing/",
        name: "microsoft.extensions.filesystemglobbing"
      },
      {
        downloads: "151813484",
        link: "/packages/system.text.encodings.web/",
        name: "system.text.encodings.web"
      },
      {
        downloads: "151813484",
        link: "/packages/system.threading.tasks.extensions/",
        name: "system.threading.tasks.extensions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.fileproviders.physical/",
        name: "microsoft.extensions.fileproviders.physical"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.mvc.abstractions/",
        name: "microsoft.aspnetcore.mvc.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.mvc.core/",
        name: "microsoft.aspnetcore.mvc.core"
      },
      {
        downloads: "151813484",
        link: "/packages/system.linq.expressions/",
        name: "system.linq.expressions"
      },
      {
        downloads: "151813484",
        link: "/packages/system.collections.immutable/",
        name: "system.collections.immutable"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.netcore.targets/",
        name: "microsoft.netcore.targets"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.authorization/",
        name: "microsoft.aspnetcore.authorization"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.routing.abstractions/",
        name: "microsoft.aspnetcore.routing.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.dependencyinjection/",
        name: "microsoft.extensions.dependencyinjection"
      },
      {
        downloads: "151813484",
        link: "/packages/netstandard.library/",
        name: "netstandard.library"
      },
      {
        downloads: "151813484",
        link: "/packages/system.security.principal.windows/",
        name: "system.security.principal.windows"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.mvc.formatters.json/",
        name: "microsoft.aspnetcore.mvc.formatters.json"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.routing/",
        name: "microsoft.aspnetcore.routing"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.netcore.app/",
        name: "microsoft.netcore.app"
      },
      {
        downloads: "151813484",
        link: "/packages/system.componentmodel/",
        name: "system.componentmodel"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.netcore.dotnethostpolicy/",
        name: "microsoft.netcore.dotnethostpolicy"
      },
      {
        downloads: "151813484",
        link: "/packages/system.reflection.metadata/",
        name: "system.reflection.metadata"
      },
      {
        downloads: "151813484",
        link: "/packages/system.runtime.compilerservices.unsafe/",
        name: "system.runtime.compilerservices.unsafe"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.mvc.dataannotations/",
        name: "microsoft.aspnetcore.mvc.dataannotations"
      },
      {
        downloads: "151813484",
        link: "/packages/system.security.cryptography.x509certificates/",
        name: "system.security.cryptography.x509certificates"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.win32.registry/",
        name: "microsoft.win32.registry"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.mvc.apiexplorer/",
        name: "microsoft.aspnetcore.mvc.apiexplorer"
      },
      {
        downloads: "151813484",
        link: "/packages/castle.core/",
        name: "castle.core"
      },
      {
        downloads: "151813484",
        link: "/packages/system.net.requests/",
        name: "system.net.requests"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.netcore.dotnethostresolver/",
        name: "microsoft.netcore.dotnethostresolver"
      },
      {
        downloads: "151813484",
        link: "/packages/system.buffers/",
        name: "system.buffers"
      },
      {
        downloads: "151813484",
        link:
          "/packages/microsoft.extensions.configuration.environmentvariables/",
        name: "microsoft.extensions.configuration.environmentvariables"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.server.kestrel/",
        name: "microsoft.aspnetcore.server.kestrel"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnetcore.hosting/",
        name: "microsoft.aspnetcore.hosting"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.hosting.abstractions/",
        name: "microsoft.extensions.hosting.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.webencoders/",
        name: "microsoft.extensions.webencoders"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.csharp/",
        name: "microsoft.csharp"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.caching.abstractions/",
        name: "microsoft.extensions.caching.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.dotnet.platformabstractions/",
        name: "microsoft.dotnet.platformabstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/system.reflection.typeextensions/",
        name: "system.reflection.typeextensions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.caching.memory/",
        name: "microsoft.extensions.caching.memory"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.localization.abstractions/",
        name: "microsoft.extensions.localization.abstractions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.localization/",
        name: "microsoft.extensions.localization"
      },
      {
        downloads: "151813484",
        link: "/packages/system.numerics.vectors/",
        name: "system.numerics.vectors"
      },
      {
        downloads: "151813484",
        link: "/packages/system.net.webheadercollection/",
        name: "system.net.webheadercollection"
      },
      {
        downloads: "151813484",
        link: "/packages/moq/",
        name: "moq"
      },
      {
        downloads: "151813484",
        link: "/packages/system.security.claims/",
        name: "system.security.claims"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.aspnet.webapi.client/",
        name: "microsoft.aspnet.webapi.client"
      },
      {
        downloads: "151813484",
        link: "/packages/system.threading.overlapped/",
        name: "system.threading.overlapped"
      },
      {
        downloads: "151813484",
        link: "/packages/system.linq.queryable/",
        name: "system.linq.queryable"
      },
      {
        downloads: "151813484",
        link: "/packages/system.runtime/",
        name: "system.runtime"
      },
      {
        downloads: "151813484",
        link: "/packages/runtime.native.system.security.cryptography/",
        name: "runtime.native.system.security.cryptography"
      },
      {
        downloads: "151813484",
        link: "/packages/system.valuetuple/",
        name: "system.valuetuple"
      },
      {
        downloads: "151813484",
        link: "/packages/system.security.cryptography.algorithms/",
        name: "system.security.cryptography.algorithms"
      },
      {
        downloads: "151813484",
        link: "/packages/system.runtime.extensions/",
        name: "system.runtime.extensions"
      },
      {
        downloads: "151813484",
        link: "/packages/system.diagnostics.debug/",
        name: "system.diagnostics.debug"
      },
      {
        downloads: "151813484",
        link: "/packages/system.globalization/",
        name: "system.globalization"
      },
      {
        downloads: "151813484",
        link: "/packages/system.collections/",
        name: "system.collections"
      },
      {
        downloads: "151813484",
        link: "/packages/libuv/",
        name: "libuv"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.configuration.fileextensions/",
        name: "microsoft.extensions.configuration.fileextensions"
      },
      {
        downloads: "151813484",
        link: "/packages/system.linq/",
        name: "system.linq"
      },
      {
        downloads: "151813484",
        link: "/packages/system.reflection/",
        name: "system.reflection"
      },
      {
        downloads: "151813484",
        link: "/packages/system.threading/",
        name: "system.threading"
      },
      {
        downloads: "151813484",
        link: "/packages/system.text.encoding.codepages/",
        name: "system.text.encoding.codepages"
      },
      {
        downloads: "151813484",
        link: "/packages/system.threading.thread/",
        name: "system.threading.thread"
      },
      {
        downloads: "151813484",
        link: "/packages/system.io/",
        name: "system.io"
      },
      {
        downloads: "151813484",
        link: "/packages/system.resources.resourcemanager/",
        name: "system.resources.resourcemanager"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.codeanalysis.common/",
        name: "microsoft.codeanalysis.common"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.codeanalysis.csharp/",
        name: "microsoft.codeanalysis.csharp"
      },
      {
        downloads: "151813484",
        link: "/packages/system.net.websockets/",
        name: "system.net.websockets"
      },
      {
        downloads: "151813484",
        link: "/packages/system.xml.xpath/",
        name: "system.xml.xpath"
      },
      {
        downloads: "151813484",
        link: "/packages/system.identitymodel.tokens.jwt/",
        name: "system.identitymodel.tokens.jwt"
      },
      {
        downloads: "151813484",
        link: "/packages/system.threading.tasks/",
        name: "system.threading.tasks"
      },
      {
        downloads: "151813484",
        link: "/packages/system.diagnostics.tracesource/",
        name: "system.diagnostics.tracesource"
      },
      {
        downloads: "151813484",
        link: "/packages/system.runtime.loader/",
        name: "system.runtime.loader"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.configuration.binder/",
        name: "microsoft.extensions.configuration.binder"
      },
      {
        downloads: "151813484",
        link: "/packages/system.text.encoding/",
        name: "system.text.encoding"
      },
      {
        downloads: "151813484",
        link: "/packages/system.reflection.extensions/",
        name: "system.reflection.extensions"
      },
      {
        downloads: "151813484",
        link: "/packages/microsoft.extensions.configuration.json/",
        name: "microsoft.extensions.configuration.json"
      }
    ]);
  });
});
