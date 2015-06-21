'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller');
    var likeCtrl = require('../../app/controllers/likes.server.controller');

    // Competitions Routes
    app.route('/likes')
        .get(likeCtrl.list)
        .put(users.requiresLogin, likeCtrl.update)
        .post(users.requiresLogin, likeCtrl.create);

    app.route('/likes/:likesId')
        .get(likeCtrl.read)

        .delete(users.requiresLogin, likeCtrl.hasAuthorization, likeCtrl.delete);


    app.param('likesId', likeCtrl.competitionByID);
};
