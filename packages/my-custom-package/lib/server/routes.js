S3.config = {
    key: 'AKIAJ2EVHQBKACQRJJLQ',
    secret: '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',
    bucket: 'medach',
    region: 'Ireland' // Only needed if not "us-east-1" or "us-standard"
};

Picker.route('/upload', function(params, req, res, next) {
  var query = params.query;
  if(query.url){ // for some reason, query.url doesn't need to be decoded
    var post = Posts.findOne({url: query.url});
    if (post) {
      var ip = req.connection.remoteAddress;
      increasePostClicks(post._id, ip);
      res.writeHead(302, {'Location': query.url});
      res.end();
    } else {
      // don't redirect if we can't find a post for that link
      res.end('Invalid URL');
    }
  } else {
    res.end("Please provide a URL");
  }
});