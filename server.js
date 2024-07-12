const express = require('express');
const routes = require('./routes');

// sequelize connection imported - note that sensitive information relative to the login information
// to the data base was included in the .env file.
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sequelize models synchronized to the database before turning on the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});