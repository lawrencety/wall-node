const commentQueries = require('../db/queries.comment.js');

module.exports = {
  create(req, res, next) {
    const options = {
      content: req.body.content,
      wallId: req.params.wallId,
      userId: req.user.id
    }
    commentQueries.createComment(options, (err, comment) => {
      if (err) {
        res.redirect(500, req.headers.referer);
      } else {
        res.redirect(`/wall/${options.wallId}`)
      }
    })
  }
}
