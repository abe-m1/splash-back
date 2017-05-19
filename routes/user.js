var userController = require('../controllers/user_controller')

function init(Router) {
     Router.route('/test')
        .get(userController.routeTest)
    
    Router.route('/user') 
        .get(userController.getAllUsers)
    
 }

module.exports.init = init
