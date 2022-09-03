const { minify } = require("terser");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scripts/**/*.js");


  eleventyConfig.addPassthroughCopy("./src/*.css");

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
      const wrappedCode = `(function(){${code}})()`
        const minified = await minify(wrappedCode);
        callback(null, "javascript:" + minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  eleventyConfig.addNunjucksFilter("escapequote", function (code) {
    return code.replace(/"/g, '\\"');
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
