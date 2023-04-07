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
    description: {
      type: DataTypes.STRING,
    },
    due_date: {
      type: DataTypes.DATE,
    },    
    attached: {
      type: DataTypes.STRING,
    },
  });
};
