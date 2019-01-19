const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
    webpack: config => {
        config.plugins.push(
            new SWPrecacheWebpackPlugin({
                cacheId: 'hackernext',
                minify: true,
                staticFileGlobsIgnorePatterns: [/\.next\//, /manifest\.json$/],
                runtimeCaching: [
                    {
                        handler: 'networkFirst',
                        urlPattern: /^http?s.*/
                    }
                ]
            })
        )
        return config
    }
}