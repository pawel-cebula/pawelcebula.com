module.exports = config => {
  config.addPassthroughCopy({ public: './' })
  config.addPassthroughCopy('./src/css/')
  config.addWatchTarget('./src/css/')
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}