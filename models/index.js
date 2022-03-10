const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

//associations
Menu.belongsTo(Restaurant, {foreignKey: "restaurant_id"})
Restaurant.hasMany(Menu, {foreignKey: "restaurant_id"})

Item.belongsToMany(Menu, {through: 'menu_item'}) // adds foreign key to Item which belongs to Menu
Menu.belongsToMany(Item, {through: 'menu_item'}) // what does this provide for us?

module.exports = { Restaurant, Menu, Item } //exporting models w/ associations