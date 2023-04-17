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
      quantity_sale: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price_sale: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
