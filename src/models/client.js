const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("client", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        is: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
        len: [3, 40],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        len: [5, 40],
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 35],
      },
    },
    vip: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    enable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
