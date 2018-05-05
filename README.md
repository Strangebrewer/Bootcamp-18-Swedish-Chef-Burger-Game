# 04-Sequelized-Burger-Two

## :mag: Table of Contents :mag:

### [1-Description](https://github.com/Strangebrewer/04-Sequelized-Burger-Two#Description)
### [2-Technologies](https://github.com/Strangebrewer/04-Sequelized-Burger-Two#Technologies)
### [3-Challenges](https://github.com/Strangebrewer/04-Sequelized-Burger-Two#Challenges)
### [4-Future Development](https://github.com/Strangebrewer/04-Sequelized-Burger-Two#Future Development)
### [5-Contributors](https://github.com/Strangebrewer/04-Sequelized-Burger-Two#Contributors)

### 1-Description
A web app designed to explore Sequelize and Handlebars. The original app utilized an extremely simple and custom built ORM and had simpler functionality - basically, creating and eating burgers (I also added the functionality to re-order the same burger or delete it). This app runs on Sequelize, but rather than building a new app from the ground up, I refactored the original app to use Sequelize. This app takes in customer and burger names and stores them in a MySQL database. Each customer has a full status stored as a boolean, and each burger has a devoured status, also stored as a boolean. Each burger is associated to a customer with a foreign id key, and when the customer is deleted, all of their burgers are also deleted.

When a customer is full, they are removed from the order dropdown menu, and if they continue to eat, they have a (Math.floor(Math.random()) chance of exploding. If they explode, a modal tells them they have exploded, and they are deleted from the database.

Clearly, this is a useless app on its own, but the structure could easily be adapted to create a comments section or a shared blog.

### 2-Technologies
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

### 3-Challenges
  The biggest challenge for me in building this came from how to get at data inside associated "belongsTo" Models included in search results. In other words, searching for all diners and including all associated burgers results in layers of objects and arrays that were a bit tricky to figure out. It's simple enough looking back on it after figuring it out, but it took a fair bit of trial and error.

  The complexity of data flow between the various files and folders were challenging to keep track of at first, but it became clearer once my understanding of the relationship between all the files solidified.

### 4-Issues
  Currently there are no known issues that need to be resolved. If you find an issue please submit it using the issues tab, or contact [Keith Allmon](https://github.com/Strangebrewer/).

### 5-Future Development
  This could be turned into a rudimentary game by adding a point system, a point incentive to keep eating after becoming full (and thus risk exploding, i.e. deletion), and a way to remove full status (maybe a button that results in either removing full status if successful or a point reduction upon failure). Turns could be easily handled with a boolean "turn" column for each player; to enforce that functionality by excluding actions for other players would require much more complexity, or so it seems without delving too deep into development.

### 5-Contributors
- [Keith Allmon](https://github.com/Strangebrewer/)
> **PS:** If you would like to contribute please contact Keith Allmon on GitHub or at BKAShambala@gmail.com. I welcome both first time contributors and experienced developers with critical feedback. 