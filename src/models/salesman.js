const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("salesman", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 40],
      },
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        len: [10, 35],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "12345",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 35],
      },
    },
    enable: {
      type: DataTypes.BOOLEAN,
    },
    image:{
      type: DataTypes.STRING,
    },
  });
};
