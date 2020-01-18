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
  plugins: [
    [
      "vuepress-plugin-simple-analytics",
      {
        customDomain: null,
        eventsGlobal: "sa",
        skipDnt: false
      }
    ]
  ]
};
```
