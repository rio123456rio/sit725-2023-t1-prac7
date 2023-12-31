let client = require('../dbConnection');

let collection = client.db().collection('Receipes');

function postReceipe(receipe, callback) {
    collection.insertOne(receipe,callback);
}

function getAllReceipes(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postReceipe,getAllReceipes}