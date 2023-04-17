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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
          len: [3, 100],
        },
      },
      quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      enable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      cost_price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      sale_price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      discount: { type: DataTypes.NUMERIC },
      category: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
    },
    {
      timestamps: true,
    }
  );
};
