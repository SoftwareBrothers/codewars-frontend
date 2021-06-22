const { i18n } = require('./next-i18next.config');

const basePath = '';

const options = {
  inlineImageLimit: 0,
  i18n,
  serverRuntimeConfig: {
    SERVER_API_URL: process.env.SERVER_API_URL,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  productionBrowserSourceMaps: true,
  target: 'serverless',
  webpack: (config, options) => {
    // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
    // @sentry/node will run in a Node.js environment. @sentry/node will use
    // Node.js-only APIs to catch even more unhandled exceptions.
    //
    // This works well when Next.js is SSRing your page on a server with
    // Node.js, but it is not what we want when your client-side bundle is being
    // executed by a browser.
    //
    // Luckily, Next.js will call this webpack function twice, once for the
    // server and once for the client. Read more:
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    //
    // So ask Webpack to replace @sentry/node imports with @sentry/browser when
    // building the browser's bundle
   

    // Define an environment variable so source code can check whether or not
    // it's running on the server so we can correctly initialize Sentry
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
