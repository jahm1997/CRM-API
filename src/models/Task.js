const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("task", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    state: {
      type: DataTypes.STRING,
    },
    to: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.TEXT,
    },
    subject: {
      type: DataTypes.STRING,
    },
    attached: {
      type: DataTypes.STRING,
    },
  });
};
