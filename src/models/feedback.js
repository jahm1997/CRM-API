const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("feedback", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  });
};
