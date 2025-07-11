module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("login.html");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_redirects"); // << THIS is key
  eleventyConfig.addPassthroughCopy({ "admin/cms.html": "admin/cms.html" });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};