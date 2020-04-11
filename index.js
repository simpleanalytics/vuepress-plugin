const { path } = require("@vuepress/shared-utils");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const domain =
      options.customDomain ||
      siteConfig.customDomain ||
      "scripts.simpleanalyticscdn.com";
    const eventsGlobal =
      options.eventsGlobal || siteConfig.eventsGlobal || "sa_event";
    const skipDnt = options.skipDnt || siteConfig.skipDnt || false;
    return { domain, eventsGlobal, skipDnt };
  },

  enhanceAppFiles: path.resolve(__dirname, "enhanceAppFile.js")
});
