const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("client", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vip: {
      type: DataTypes.BOOLEAN,
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
