const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Menu = sequelize.define('menu', {
  title: Sequelize.STRING,
})

module.exports = {Menu};