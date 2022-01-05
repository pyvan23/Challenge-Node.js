module.exports = (sequelize, dataTypes) => {
    return sequelize.define('characters', {
        id: {
            type: dataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            initialAutoIncrement: 1
        },       
        image: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        name: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        age: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        weight: {
            type: dataTypes.STRING(40),
            allowNull: true
        },
        history: {
            type: dataTypes.STRING(300),
            allowNull: true
        },
        moviesOrSeries: {
            type: dataTypes.STRING(40),
            allowNull: true
        }
    })
};