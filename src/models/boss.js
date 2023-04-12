const { DataTypes, Sequelize } = require("sequelize");

module.exports = (database) => {
  database.define(
    "boss",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
          len: [3, 40],
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 40],
        },
      },
      company: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 55],
        },
      },
      company_description: {
        type: DataTypes.STRING,
      },
      commercial_register: {
        type: DataTypes.STRING,
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
        validate: {
          len: [5, 35],
        },
      },
      logo: {
        type: DataTypes.STRING,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
