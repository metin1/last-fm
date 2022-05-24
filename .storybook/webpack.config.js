const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, '..', 'src'),
    'node_modules',
  ]

  config.resolve.alias = {
    src: path.resolve(__dirname, '../src'),
    components: path.resolve(__dirname, '../src/components'),
    store: path.resolve(__dirname, '../src/store'),
    helpers: path.resolve(__dirname, '../src/helpers'),
    assets: path.resolve(__dirname, '../src/assets'),
  }

  return config
}
