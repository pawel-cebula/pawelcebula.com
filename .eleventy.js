const dateFilter = require('./src/filters/dateFilter.js');
const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginSEO = require('eleventy-plugin-seo');

module.exports = (config) => {
  config.setBrowserSyncConfig({ ghostMode: false });
  config.addPlugin(readingTime);
  config.addPlugin(syntaxHighlight, {
    templateFormats: ['md'],
  });
  config.addPlugin(pluginSEO, {
    title: 'Pawel Cebula',
    description: 'Web developer and startup founder based in Berlin',
    url: 'https://www.pawelcebula.com',
    author: 'Pawel Cebula',
    twitter: 'pawelceb',
    image: '/assets/profile.jpg',
    options: {
      titleDivider: '|',
      imageWithBaseUrl: true,
    },
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
