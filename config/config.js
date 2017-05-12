const db = require('./database.js')
const dev = require('./dev.js')
const port = 5000

function init(app){
    //initialize the database connection
    app.db = db(dev.db)
}
const config = {
    init: init,    
    port: port,
    db: dev
   
}

module.exports = config