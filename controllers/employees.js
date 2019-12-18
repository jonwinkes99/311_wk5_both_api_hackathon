const express = require("express");
const mysql = require("mysql");
const pool = require("../mySQL/connections");
const { handleSQLError } = require("../sql/error");

const getEmployees = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {
  res.send("getting employees... ");
};
//const controllers = express.controllers();

module.exports = {
  getEmployees,
  // getEmployeesById,
  getEmployeesByFirstName
  // getEmployeesSalary,
  // getEmployeesDepartment,
  // getOneSalaryById
};
