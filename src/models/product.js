const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      enable: DataTypes.BOOLEAN,
      cost_price: DataTypes.NUMERIC,
      sale_price: DataTypes.NUMERIC,
      discount: DataTypes.NUMERIC,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
};
