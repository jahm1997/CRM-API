const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("salesman", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    enable: {
      type: DataTypes.BOOLEAN,
    },
  });
};
