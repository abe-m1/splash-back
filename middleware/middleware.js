const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')



module.exports.init = (app) => {
 


    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cors())

}