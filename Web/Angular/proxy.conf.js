const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/Scripts",
      "/signalr",
      "/Resource",
      "/token"
    ],
    target: "http://localhost:62558",
    secure: false,
    "changeOrigin": true
  },
  {
    context: [
      "/Angular/dist"
    ],
    target: "http://localhost:4200/",
    secure: false,
    "changeOrigin": true,
    "pathRewrite": {
      "^/Angular/dist": ""
    },
  }
];


module.exports = PROXY_CONFIG;
