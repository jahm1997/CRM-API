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
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    vip: {
      type: DataTypes.BOOLEAN,
    },
    enable: {
      type: DataTypes.BOOLEAN,
    },
  });
};
