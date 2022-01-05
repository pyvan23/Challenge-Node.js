module.exports = (sequelize, dataTypes) => {
  return sequelize.define("gender", {
    id: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      initialAutoIncrement: 1,
    },
    name: {
      type: dataTypes.STRING(40),
      allowNull: true,
    },
    image: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },

    seriesOrMovies: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  });
};
