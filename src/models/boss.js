const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('boss', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
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