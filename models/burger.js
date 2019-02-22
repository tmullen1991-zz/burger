var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(colNames, vals, cb) {
    orm.insertOne("burgers", colNames, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, cb) {
    orm.updateOne("burgers", burgerId, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
