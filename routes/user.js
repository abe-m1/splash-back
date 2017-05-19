var userController = require('../controllers/user_controller')

function init(Router) {
     Router.route('/test')
        .get(userController.routeTest)
    
 }

module.exports.init = init
