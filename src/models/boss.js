const { DataTypes, Sequelize} = require('sequelize');


module.exports = (database) => {
    database.define('boss', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: DataTypes.STRING,
        company: DataTypes.STRING,
        company_description: DataTypes.STRING,
        commercial_register: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        logo: DataTypes.STRING,
        enable: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });
}