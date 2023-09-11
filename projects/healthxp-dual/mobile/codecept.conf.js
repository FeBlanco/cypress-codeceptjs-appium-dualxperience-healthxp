const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQzMzZjYTkzLWIxNDMtNGJlMi05ODc1LWE3M2RhMjQ2ZGY4ZS0xNjk0NDY0NDE1MDgwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOGQ0OWMxMjYtZTliNC00ZjM5LThjMTQtOGUzYTU2ZWI4ZTY2IiwidHlwZSI6InQifQ.etFdgVZI-vhilzIIIzxkpwfOJGernkMs6WtsZrMEP0U";

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./e2e/*_test.js",
  output: "./output",
  plugins: {
    tesults: {
      require: "codeceptjs-tesults",
      enabled: true,
      target: token,
    },
  },
  helpers: {
    Appium: {
      app: "C:\\QAx\\apps\\healthxp\\mobile\\hxp-beta2.apk",
      platform: "Android",
      device: "emulator",
    },
    REST: {
      endpoint: "http://localhost:5000",
    },
    JSONResponse: {
      requestHelper: "REST",
    },
  },
  include: {
    I: "./support/steps_file.js",

    loginScreen: "./support/screens/login.js",
    accountScreen: "./support/screens/account.js",
    helpOrderScreen: "./support/screens/help-orders.js",
  },
  name: "mobile",
};
