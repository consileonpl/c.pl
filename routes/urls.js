var ShortUrl = mongoose.model({
  originalUrl: String,
  shortUrl: String
});

exports.create = function(req, res) {
  res.json({
    shortUrl: 'http://c.pl/XYZ'
  });
};
