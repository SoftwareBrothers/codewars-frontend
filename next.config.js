const { i18n } = require('./next-i18next.config');

const basePath = '';

const options = {
  inlineImageLimit: 0,
  env: {
    API_URL: process.env.API_URL,
  },
  productionBrowserSourceMaps: true,
  target: 'serverless',
  i18n,
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.NEXT_IS_SERVER': JSON.stringify(
          options.isServer.toString(),
        ),
      }),
    );
    config.experiments = {};
    return config;
  },
  basePath,
};

module.exports = options;
