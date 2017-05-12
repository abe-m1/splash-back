const db = require('./database.js')
const port = 5000

function init(app){
    //initialize the database connection
    app.db = db(dev.db)
}
const config = {
    init: init,    
    port: port,
   
}

module.exports = config