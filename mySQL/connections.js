const mysql = require("mysql");
// require("dotenv").config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "34.66.38.33",
        user: "root",
        password: "SQLMAMA",
        database: "employees"
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;

//the connection is here
