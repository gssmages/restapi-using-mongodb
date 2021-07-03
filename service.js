var db = require("seriate");

// SQL Server and database config
var config = {
  // Dev database

  Driver: "SQL Server Native Client 11.0",
  server: "GSSNTE808.asia.ad.flextronics.com",
  user: "mobileux_coe",
  port: "1433",
  password: "mobile@432",
  database: "devhub_training",
  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

db.addConnection(config);
db.stream = true;

exports.get_productlist = function(req, res) {
  db.execute({
    query:
      "select prod_id,name,Description,price,created_by,created_on from prod_catlogue where flag='Y'"
  }).then(
    function(results) {
      res.send({ results });
    },
    function(err) {
      console.log("Something bad happened:", err);
    }
  );
};
exports.get_productdetail = function(req, res) {
  db.execute({
    query:
      "select prod_id,name,Description,price,created_by,created_on from prod_catlogue where flag='Y' and prod_id=@prod_id",
    params: {
      prod_id: {
        type: db.NVARCHAR,
        val: req.param("prod_id")
      }
    }
  }).then(
    function(results) {
      res.send({ results });
    },
    function(err) {
      console.log("Something bad happened:", err);
    }
  );
};
exports.delete_product = function(req, res) {
  db.execute({
    query: "update prod_catlogue set flag='N' where prod_id=@prod_id",
    params: {
      prod_id: {
        type: db.NVARCHAR,
        val: req.param("prod_id")
      }
    }
  }).then(
    function(results) {
      res.send("Deleted Succesfully");
    },
    function(err) {
      console.log("Something bad happened:", err);
    }
  );
};
exports.add_product = function(req, res) {
  db.execute({
    query:
      "insert into prod_catlogue ([name],[Description],[price],[created_by],[created_on],[flag]) values" +
      " (@name,@description,@price,@created_by,GETDATE(),'Y')",
    params: {
      name: {
        type: db.NVARCHAR,
        val: req.param("name")
      },
      description: {
        type: db.NVARCHAR,
        val: req.param("description")
      },
      price: {
        type: db.NVARCHAR,
        val: req.param("price")
      },
      created_by: {
        type: db.NVARCHAR,
        val: req.param("created_by")
      }
    }
  }).then(
    function(results) {
      res.send("Product Added Succesfully");
    },
    function(err) {
      console.log("Something bad happened:", err);
    }
  );
};

exports.call_sp = function(req, res) {
  db.execute({
    query: "EXECUTE sp_name @param1,@param2",
    params: {
      param1: {
        type: db.NVARCHAR,
        val: req.param("param1")
      },
      param2: {
        type: db.NVARCHAR,
        val: req.param("param2")
      }
    }
  }).then(
    function(results) {
      res.send("Product Added Succesfully");
    },
    function(err) {
      console.log("Something bad happened:", err);
    }
  );
};
