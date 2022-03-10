const express = require("express")
const app = express()
const port = 3000;
const {Restaurant, Menu, Item} = require("./models/index")
const {sequelize} = require("./db")

app.get("/restaurants", async (req, res) => {
    const restaurantWithItems = await Restaurant.findAll({
        include: Menu,
        include: [{
            model: Menu,
            include: [{
                model: Item
            }]
        }]
    });
    res.json(restaurantWithItems);
})


app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})