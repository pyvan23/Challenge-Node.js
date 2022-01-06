const Sequelize = require("sequelize");
const charactersModel = require("./models/characters");
const genderModel = require("./models/gender");
const MoviesOrSeriesModel = require("./models/moviesOrSeries");
const userModel = require('./models/users');

const sequelize = new Sequelize(
  "heroku_f6dc6aa5a4337c5",
  "bd677303050a7c",
  "13aca40c",
  {
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  }
);
const characters = charactersModel(sequelize, Sequelize);
const gender = genderModel(sequelize, Sequelize);
const moviesOrSeries = MoviesOrSeriesModel(sequelize, Sequelize);
const user = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("The tables are fine..");
});
module.exports = {
  characters,
  gender,
  moviesOrSeries,
  user
}

