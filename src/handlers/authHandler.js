// const { name } = require("../app.js");
const findUser = require("../controllers/auth/findUser.js");
const jwt = require('jsonwebtoken');
const {serialize} = require('cookie');

const loginUser = async (req, res) => {
  const { email, password, status } = req.body;
  try {
    let exist = await findUser(email);

    // console.log(exist);

    if(exist) {
      if(password !== exist.password) {
        throw new Error('ya fuiste pa');
      }

      const token = jwt.sign({
        exp: Math.floor(Date.now()/1000) * 60 * 60 * 24 * 7,
        id: exist.id,
        name: exist.name,
        email: exist.email,
        password: exist.password
      }, "secret")
      console.log('************** TOKEN **************',token)

      const serialized = serialize('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 7,
        path: '/'
      })

      console.log('********** SERIALIZED ************', serialized);

      res.setHeader('Set-Cookie', serialized)
      res.send('hola');
    }

    throw new Error('no había usuario ni en boss ni en salesman')

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
};
