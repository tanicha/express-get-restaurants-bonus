const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const appleBees = await Restaurant.create(seedRestaurant[0])
        expect(appleBees.name).toBe(seedRestaurant[0].name)
    });

    test('can create a Menu', async () => {
        const testMenu = await Menu.create(seedMenu[0])
        expect(testMenu.title).toBe(seedMenu[0].title)
    });

    test('can find Restaurants', async () => {
        const foundRestaurant = await Restaurant.findAll();
        expect(foundRestaurant.length).toBe(1);
        expect(foundRestaurant[0].name).toBe(seedRestaurant[0].name);
    });

    test('can find Menus', async () => {
        const foundMenu = await Menu.findAll();
        expect(foundMenu.length).toBe(1);
        expect(foundMenu[0].title).toBe(seedMenu[0].title);
    });

    test('can delete Restaurants', async () => {
        const foundMenu = await Menu.findAll();
        const deletedMenu = await foundMenu[0].destroy();
        expect(deletedMenu.title).toBe(seedMenu[0].title);
    });
})