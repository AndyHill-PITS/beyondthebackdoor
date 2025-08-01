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
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Passthrough only the specific CMS files
  eleventyConfig.addPassthroughCopy({ "static-admin/cms.html": "admin/index.html" });
  eleventyConfig.addPassthroughCopy({ "admin/config.yml": "admin/config.yml" });

  eleventyConfig.addLayoutAlias("our-story", "our-story.njk");
  eleventyConfig.addLayoutAlias("services", "services.njk");
  eleventyConfig.addLayoutAlias("testimonials", "testimonials.njk");
  eleventyConfig.addLayoutAlias("contact", "contact.njk");
  eleventyConfig.addLayoutAlias("gallery", "gallery.njk");

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};