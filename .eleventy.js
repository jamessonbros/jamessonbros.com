module.exports = function (eleventyConfig) {
  eleventyConfig.dir = {
    input: 'src',
    output: '_site'
  }

  eleventyConfig.addPassthroughCopy('src/style.css')

  eleventyConfig.passthroughFileCopy = true

  return eleventyConfig
}
