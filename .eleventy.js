const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function (eleventyConfig) {
  // Add markdown filter
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("login.html");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Passthrough only the specific CMS files
  eleventyConfig.addPassthroughCopy({ "static-admin/cms.html": "admin/index.html" });
  eleventyConfig.addPassthroughCopy({ "admin/config.yml": "admin/config.yml" });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};