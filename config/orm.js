var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName, cb) {
    connection.query("SELECT * FROM " + tableName + ";", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(tableName, colNames, vals, cb) {
    connection.query(
      "INSERT INTO " + tableName + " (" + colNames + ") VALUES (" + vals + ")",
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(tableName, burgerId, cb) {
    connection.query(
      "UPDATE " + tableName + " SET devoured = true WHERE id = " + burgerId,
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  }
};
module.exports = orm;
