const express = require("express");
const mysql = require('mysql');
const pool = require('../sql/connections');
const {handleSQLError} = require('../sql/error');

const getEmployess = (req, res) => {
    // SELECT ALL USERS
    pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
    });
    };


//const controllers = express.controllers();




module.exports = { 
    getEmployees,
    // getEmployeesById,
    // getEmployeesByFirstName,
    // getEmployeesSalary,
    // getEmployeesDepartment,
    // getOneSalaryById 
}