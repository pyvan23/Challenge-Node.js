const Sequelize = require("sequelize");
const charactersModel = require("./models/characters");
const genderModel = require("./models/gender");
const MoviesOrSeriesModel = require("./models/moviesOrSeries");

const sequelize = new Sequelize(
  "heroku_e8adc680ade950b",
  "bafbc424c96856",
  "b0cc16c7",
  {
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  }
);
const characters = charactersModel(sequelize, Sequelize);
const gender = genderModel(sequelize, Sequelize);
const moviesOrSeries = MoviesOrSeriesModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("The tables are fine..");
});
module.exports = {
  characters,
  gender,
  moviesOrSeries
}

