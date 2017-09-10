// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
  console.log("arr: " + arr)
}

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function(table, cols, vals, cb) {
		console.log("cols: " + cols)
		console.log("vals: " + vals)
		var queryString = "INSERT INTO burgers" ;
		queryString += " (";
    	queryString += "burger_name,devoured"
    	queryString += ") ";
    	queryString += "VALUES (";
    	queryString += printQuestionMarks(vals.length)
    	queryString += ") ";

    	connection.query(queryString, vals, function(err, result) {
    		if (err) {
    			throw (err);
    		}
    		cb(result);
    	})
	},
	update: function(table, objColVals, condition, cb) {

		var queryString = "UPDATE " + table;
	    queryString += " SET ";
	    queryString += "devoured = 1"
	    queryString += " WHERE ";
	    queryString += condition;
	    console.log(queryString);
    	connection.query(queryString, function(err, result) {
      		if (err) {
        	throw err;
      		}
      		cb(result);
		})
	}
}

module.exports = orm;