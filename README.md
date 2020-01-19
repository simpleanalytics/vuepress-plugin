# Simple Analytics VuePress plugin

[Simple Analytics](https://simpleanalytics.com) is a clean, simple, and privacy friendly analytics tool. Actionable data in a beautiful dashboard. It does not use cookies and you can bypass ad blockers. Make sure to signup to get most value out of this plugin.

## Install

Just run this command to install Simple Analytics for VuePress:

```bash
npm install vuepress-plugin-simple-analytics --save-dev
```

## Import in app

Import the plugin and add it to plugins in `.vuepress/config.js`.

```js
module.exports = {
  plugins: ["vuepress-plugin-simple-analytics"]
};
```

### More features

We have more features like a [custom domain](https://docs.simpleanalytics.com/bypass-ad-blockers) to bypass ad-blockers, [events](https://docs.simpleanalytics.com/events), and [allow the collect from DNT users](https://docs.simpleanalytics.com/dnt). Events are enabled by default.

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-simple-analytics",
      {
        customDomain: "data.example.com", // You custom domain
        eventsGlobal: "sa", // The global events object for sa("click_button")
        skipDnt: true // When set to true you track the DNT users
      }
    ]
  ]
};
```
