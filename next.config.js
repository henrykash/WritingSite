/*const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/svg/'),
  webpack(config, options) {
    return config
  }
})*/

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"] //webpack checks for an svg file and then uses the svgr loader to load such file.
    });

    return config;
  }
};
