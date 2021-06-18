const basePath = ''

module.exports = {
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {


    // Define an environment variable so source code can check whether or not
    // it's running on the server so we can correctly initialize Sentry
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.NEXT_IS_SERVER': JSON.stringify(
          options.isServer.toString()
        ),
      })
    )

    return config
  },
  basePath,
}
