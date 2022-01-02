export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Hello dsds",
  "description": "Just playing around",
  "head": [
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1"
      }
    ],
    [
      "meta",
      {
        "charset": "utf-8"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
