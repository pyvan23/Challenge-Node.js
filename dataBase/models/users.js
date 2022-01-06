module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            initialAutoIncrement: 1
        },       
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
         
    })
};