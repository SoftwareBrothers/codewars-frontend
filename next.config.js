const { i18n } = require('./next-i18next.config');

const basePath = '';

const options = {
  inlineImageLimit: 0,
  i18n,
  env: {
    API_URL: process.env.API_URL,
  },
  productionBrowserSourceMaps: true,
  target: 'serverless',
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.NEXT_IS_SERVER': JSON.stringify(
          options.isServer.toString(),
        ),
      }),
    );
    return config;
  },
  basePath,
};

module.exports = options;
