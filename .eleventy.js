const { execSync } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/static/');
  eleventyConfig.setServerOptions({
    watch: ['./docs/css/styles.css']
  });

  return {
    htmlTemplateEngine: "njk",

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: '/design', // prepended to all URL paths

    dir: {
      input: 'src',
      output: 'docs'
    }
  }
}