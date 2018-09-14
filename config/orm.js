var connection = require("..config/connection.js");

function objToSql(obj){
  var arr = [];
  for (var key in obj){
    var value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)){
      if (typeof value === "string"  && value.indexOf(" ")>=0){
      value = "'"+ value +"'";
      }
    arr.push(key +"="+value);
    }
  return arr.toString();
  }
}
var orm = {
  selectAll: function(tableInput, call1) {
    var queryString = "SELECT * FROM ?? WHERE" + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      call1(result);
    });
  },
  insertOne: function(table, cols, vals, call1) {
    var queryString = "INSERT INTO" + table;
    queryString += "(";
    queryString += cols.toString();
    queryString += ")";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ")";
    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      call1(result);
    });
  },
  updateOne: function(table, ObjColVals, condition, call1) {
    var queryString = "UPDATE" + table;
    queryString += "SET";
    queryString += objToSql(ObjColVals);
    queryString += "WHERE";
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      call1(result);
    });
  },
  delete: function(table, condition, call1) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      call1(result);
    });
  }
}

module.exports = orm;
