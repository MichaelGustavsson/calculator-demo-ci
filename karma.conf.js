module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    preprocessors: {
      "./calculator/*.js": ["coverage"]
    },
    files: [
      "calculator/*.js", "calculator/*.spec.js"
    ],
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-coverage"
    ],
    reporters: ["dots", "coverage"],
    colors: true,
    //autoWatch: true,
    browsers: ["ChromeHeadless"],
    //browsers: ["Chrome"],
    singleRun: true,
    coverageReporter: {
      dir: "coverage/",
      reporters: [
        {type: "html", subdir: "html"}
      ]
    }
  });
};
