const dateFilter = require('./src/filters/dateFilter.js');
const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = (config) => {
  config.setBrowserSyncConfig({ ghostMode: false });
  config.addPlugin(readingTime);
  config.addPlugin(syntaxHighlight, {
    templateFormats: ['md'],
  });
  config.addFilter('dateFilter', dateFilter);
  config.addPassthroughCopy({ public: './' });
  config.addPassthroughCopy('./src/css/');
  config.addWatchTarget('./src/css/');
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
