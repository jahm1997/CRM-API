const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("activity", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    method: {
      type: DataTypes.ENUM("Correo-E", "Llamada", "E-mail", "Call"),
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM("Pendiente", "Concretado", "Earring", "Concretized"),
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING,
      validate: {
        is: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
        len: [3, 40],
      },
    },
    to: {
      type: DataTypes.STRING,
      validate: {
        is: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
        len: [3, 40],
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
    },
    attached: {
      type: DataTypes.STRING,
    },
  });
};
