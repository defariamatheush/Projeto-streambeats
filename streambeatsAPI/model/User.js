const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const Account = new mongoose.Schema({
    nickname: String,
    email: String,
    password: String,
    date_creation: Date,
    date_update: String,
    linked_accounts: {
        spotify_id: String,
        twitch_id:String
    }
});

module.exports = Account;