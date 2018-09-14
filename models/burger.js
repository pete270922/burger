var orm = require("../config/orm.js");

var cheeseburger = {
  selectAll: function(call1) {
    orm.all("hamburgers", function(res) {
      call1(res);
    });
  },
  // The variables cols and vals are arrays.
   insertOne: function(cols, vals, call1) {
    orm.insertOne("hamburgers", cols, vals, function(res) {
      call1(res);
    });
  },
  updateOne: function(objColVals, condition, call1) {
    orm.updateOne("hamburgers", objColVals, condition, function(res) {
      call1(res);
    });
  },
  delete: function(condition, call1) {
    orm.delete("hamburgers", condition, function(res) {
      call1(res);
    });
  }
};

// Export the database functions for the controller (burgerController1.js).
module.exports = cheeseburger;
