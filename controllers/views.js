module.exports = {
  Homepage: (req, res, next) => {
    console.log(req.data);
    res.render('index');
  },
  Register: (req, res, next) => {
    res.render('register');
  }
}
