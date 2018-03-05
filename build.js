var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var sass        = require('metalsmith-sass');
var assets      = require('metalsmith-assets');

var metalsmith = Metalsmith(__dirname)
  .metadata({
    title: "CouponCoCo.org",
    description: "It's about saying »Hello« to the World.",
    keywords: "blockchain, payment, micro payment, coupon, free coupon",
    author: "CouponCoco Core Contributors",
    generator: "Metalsmith",
    url: "https://couponcoco.org/"
  })
  .source('src')
  .destination('public')
  .clean(true)
  .use(assets({
    source: 'src-assets',
    destination: '.'
  }))
  .use(sass({
    outputStyle: "expanded",
    outputDir: "css"
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    directory: 'src-layouts',
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
    console.log('Build finished!');
  });


