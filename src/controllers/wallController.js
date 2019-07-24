const wallQueries = require('../db/queries.wall.js');

module.exports = {
  index(req, res, next) {
    wallQueries.getAllWalls((err, walls) => {
      if(err){
        res.redirect(500, req.headers.referer);
      } else {
        res.render('wall/index', {walls})
      }
    })
  },

  show(req, res, next) {
    wallQueries.getWall(req.params.id, (err, wall) => {
      if(err) {
        res.redirect(500, '/wall');
      } else {
        res.render('wall/show', {wall})
      }
    })
  },

  new(req, res, next) {
    res.render('wall/new')
  },

  create(req, res, next) {
    const options = {
      name: req.body.name,
      description: req.body.description,
      userId: req.user.id
    }
    console.log(options);
    wallQueries.createWall(options, (err, wall) => {
      if (err) {
        res.redirect(500, '/wall/new');
      } else {
        res.render('wall/show', {wall})
      }
    })
  }
}
