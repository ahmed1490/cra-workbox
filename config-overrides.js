/* config-overrides.js */

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {

  config.plugins = config.plugins.map(plugin => {
    if (plugin.constructor.name === 'GenerateSW') {

      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/sw.js', //whatever you like
        swDest: 'service-worker.js' //has to match
      });

    }

    return plugin;
  })

  // console.log("config : ", config);
  return config;
}
