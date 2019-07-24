module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');
    const userRoutes = require('../routes/users');
    const wallRoutes = require('../routes/walls');
    const commentRoutes = require('../routes/comments');

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(wallRoutes);
    app.use(commentRoutes);
  }
}
