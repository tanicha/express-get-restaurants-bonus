const express = require("express")
const app = express()
const port = 3000;
const {Restaurant, Menu, Item} = require("./models/index")
const {sequelize} = require("./db")

//TODO: 
app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [{
            model: Menu,
            include: [{
                model: Item
            }]
        }]
    })
    res.json(restaurants)
})

app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})