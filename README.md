![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Express Get Restaurants Bonus
Using Express to make a `GET` Request to a restaurant and include the `Menu` and `Items` with the result

## Setup
After forking and cloning this repository, run the following in your terminal

```bash
npm install
npm run seed
npm start
```

## Directions
1. Make a GET route using Express to handle the endpoint “restaurants”
2. Since you’re making a call to a database, don’t forget to use async and await as part of the callback argument
3. Use express to load all of the restaurants from the restaurant model.
4. Within your Sequelize method to find all of the restaurants in the model, include several arguments
    - Include the Menus as part of the response
    ```js
    {include: Mode1} //Argument 1
    ```
    - Include from the menu, the items in that menu
    ```js
    {
    include: Mode1, //Which model should we add here?
        include: [{
            model: Mode1,
            include: [{
                model: Model2 //Which model should we add here?
            }]
        }]
    }
    //Argument 2
    ```
5. Test your endpoint to “restaurants” using Postman and check your result. 
