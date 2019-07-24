const Wall = require('./models').Wall;
const Comment = require('./models').Comment;
const User = require('./models').User;

module.exports = {
  createWall(newWall, callback) {
    return Wall.create(newWall)
    .then((wall) => {
      callback(null, wall);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getAllWalls(callback) {
    return Wall.findAll()
    .then((walls) => {
      callback(null, walls);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getWall(id, callback) {
    return Wall.findByPk(id, {
      include: [
        { model: Comment, as: 'comments', include: [{ model: User }] }
      ]
    })
    .then((wall) => {
      callback(null, wall);
    })
    .catch((err) => {
      callback(err)
    })
  }
}
