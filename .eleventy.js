module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('assets')
  return {
    passthroughFileCopy: true
  }
}
