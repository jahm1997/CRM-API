const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("user", {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [3, 40],
      },
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [3, 40],
      },
    },
    token: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        len: [10, 35],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      unique: true,
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enable: {
      type: DataTypes.BOOLEAN,
    },
  });
};
