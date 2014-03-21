module.exports = function(mongoose) {

  var ShortUrl = mongoose.model('Url', {
    originalUrl: String,
    token: String
  });

  return {
    create: function(req, res) {
      var randomstring = require("randomstring");
      var token = randomstring.generate(7);

      ShortUrl.create({
        originalUrl: req.body.url,
        token: token
      }, function(err, shortUrl) {
        if (err) res.send(err);

        res.json(shortUrl);
      });
    },
    find: function(req, res) {
      shortUrl = ShortUrl.findOne({
        token: req.params.token
      }, 'originalUrl', function(err, shortUrl) {
        if (err) res.send(err);

        res.redirect(shortUrl.originalUrl);
      });
    }
  }

};

