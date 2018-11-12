module.exports = function(app) {

  // use res.render to load up an ejs view file
  // index page
  app.get('/', function(req, res) {
      res.render('index');
  });

  app.get('/home', function(req, res) {
    res.render('sample');
  })
  
    app.get('/aboutUs', function(req, res) {
    res.render('aboutUs');
  })
  
    app.get('/donateUs', function(req, res) {
    res.render('donateUs');
  })
  
    app.get('/contactUs', function(req, res) {
    res.render('contactUs');
  })
  
    app.get('/ourTeam', function(req, res) {
    res.render('ourTeam');
  })
  
    app.get('/login', function(req, res) {
    res.render('login');
  })
  
    app.get('/register', function(req, res) {
    res.render('register');
  })
}
