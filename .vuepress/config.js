module.exports = {
  plugins: [
    [
      require("../index.js"),
      {
        customDomain: "api.adriaan.io",
        eventsGlobal: "sa",
        skipDnt: true
      }
    ]
  ]
};
