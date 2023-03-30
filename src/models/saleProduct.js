const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "sale_product",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      quantity_sale: DataTypes.INTEGER,
      price_sale: DataTypes.NUMERIC,
    },
    {
      timestamps: false,
    }
  );
};
