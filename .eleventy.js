const { execSync } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/static/');
  eleventyConfig.setServerOptions({
    watch: ['./docs/css/styles.css']
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'docs'
    }
  }
}