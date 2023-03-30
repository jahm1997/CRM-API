const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("salesman", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    enable: {
      type: DataTypes.BOOLEAN,
    },
  });
};
