const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/assets");

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    level: [2, 3, 4],
    permalink: markdownItAnchor.permalink.headerLink(),
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};

