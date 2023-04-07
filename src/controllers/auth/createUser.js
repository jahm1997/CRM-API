const { User } = require("../../db.js");

const createUser = async ({ name, lastname, bossId, email, password }) => {
  const newUser = User.create({
    name,
    lastname,
    bossId,
    email,
    password,
  });

  return newUser;
};

module.exports = createUser;
