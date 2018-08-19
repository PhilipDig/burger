var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },
  insertOne: function (table, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, column, value], function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },
  updateOne: function (table, column, value, id, cb) {
    var queryString = "UPDATE ?? SET ??=? WHERE id=?";
    column.value = value
    connection.query(queryString, [table, column, value, id], function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },

};

module.exports = orm;
