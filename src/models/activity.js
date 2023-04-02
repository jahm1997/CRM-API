const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("activity", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    method: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    from: {
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
