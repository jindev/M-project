'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller');
    var commentCtrl = require('../../app/controllers/comments.server.controller');

    // Competitions Routes
    app.route('/comments')
        .get(commentCtrl.list)
        .post(users.requiresLogin, commentCtrl.create);

    app.route('/commments/:commentId')
        .get(commentCtrl.read)
        .put(users.requiresLogin, commentCtrl.hasAuthorization, commentCtrl.update)
        .delete(users.requiresLogin, commentCtrl.hasAuthorization, commentCtrl.delete);

    // Finish by binding the Competition middleware
    app.param('commentId', commentCtrl.competitionByID);
};
