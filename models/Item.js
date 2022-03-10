
const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Item = sequelize.define('item', {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
  price: Sequelize.DECIMAL(5,2),
  vegetarian: Sequelize.BOOLEAN
})

module.exports = {Item};