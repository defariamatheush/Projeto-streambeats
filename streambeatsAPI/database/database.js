const mongoose = require("mongoose");

class Database {

    async connectDatabase(){
        mongoose.connect("mongodb://127.0.0.1:27017/streambeats");
    }

}

module.exports = new Database();