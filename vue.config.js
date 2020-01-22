const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function (req,res) {
        res.json({
          errno: 0,
          // eslint-disable-next-line no-undef
          data: seller
        })
      }),
      app.get('/api/goods', function (req,res) {
        res.json({
          errno: 0,
          // eslint-disable-next-line no-undef
          data: goods
        })
      }),
      app.get('/api/ratings', function (req,res) {
        res.json({
          errno: 0,
          // eslint-disable-next-line no-undef
          data: ratings
        })
      })

    }
  }
}
