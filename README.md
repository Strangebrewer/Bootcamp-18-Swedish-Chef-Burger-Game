# Swedish Chef Burger Game

Bootcamp assignment - an extension of the previous "Burger App" assignment. This project was designed to explore Sequelize and Handlebars (check it out on Heroku [here](https://o3-swedish-chef-burger-game.herokuapp.com/). The original app utilized an extremely simple and custom built ORM and had simpler functionality - basically, creating and eating burgers (I also added the functionality to re-order the same burger or delete it). This app runs on Sequelize, but rather than building a new app from the ground up, I refactored the original app to use Sequelize. This app takes in customer and burger names and stores them in a MySQL database. Each customer has a full status stored as a boolean, and each burger has a devoured status, also stored as a boolean. Each burger is associated to a customer with a foreign id key, and when the customer is deleted, all of their burgers are also deleted.

When a customer is full, they are removed from the order dropdown menu, and if they continue to eat, they have a (Math.floor(Math.random()) chance of exploding. If they explode, a modal tells them they have exploded, and they are deleted from the database.

Clearly, this is a useless app on its own, but the structure could easily be adapted to create a comments section or a shared blog.

This project utilizes the following technologies:
- HTML
- CSS
- Vanilla JavaScript
- [jQuery](https://jquery.com/)
- [Twitter Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Heroku](https://www.heroku.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](http://docs.sequelizejs.com/)
