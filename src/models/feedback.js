const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("feedback", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  });
};
