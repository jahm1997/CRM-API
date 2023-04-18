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
      // type: DataTypes.ENUM(1, 2, 3, 4, 5),
      type: DataTypes.INTEGER
    },
    //AGREGAR UN MENSAJE FEEDBACK
  });
};
