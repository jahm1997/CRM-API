require("dotenv").config();
const { sendMail } = require("../controllers/email/notifyPayBoss.js");
const axios = require("axios");
const updateBoss = require("../controllers/Bosses/updateBoss");
const { PAYPAL_API_CLIENT, PAYPAL_API_SECRET, PAYPAL_API } = process.env;

const createOrder = async (req, res) => {
  const { id } = req.body;
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
          },
        },
      ],
      application_context: {
        brand_name: "CRM.com",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `https://crm.up.railway.app/api/capture-order?id=${id}`,
        cancel_url: "https://crm.up.railway.app/api/cancel-order",
      },
    };

    // console.log("Soy el api client", PAYPAL_API_CLIENT);
    // console.log("Soy el api secret", PAYPAL_API_SECRET);
    // console.log(PAYPAL_API);

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    // console.log(params);

    const {
      data: { access_token },
    } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    });

    // console.log(access_token);

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

const captureOrder = async (req, res) => {
  try {
    const { token, id } = req.query;
    // console.log('Soy el token *******',token);

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    // console.log(response.data.purchase_units[0].payments.captures[0].create_time)
    let fechaRegistro = response.data.purchase_units[0].payments.captures[0].create_time;
    let payYear = fechaRegistro.slice(0, 4);
    let payMonth = fechaRegistro.slice(5, 7);
    let day = fechaRegistro.slice(8, 10);
    // console.log('Soy el payMounth',payMonth);
    // console.log('Soy el payYear',payYear);
    if(payMonth < 10){
      let mounth = Number(payMonth) + 1;
      payMonth = 0 + String(mounth)
    } else if(payMonth == 12) {
      let year = Number(payYear) + 1;
      payYear = String(year);
      payMonth = '01'
    } else {
      let mounth = Number(payMonth) + 1;
      payMonth = String(mounth);
    }
    
    // console.log('Soy el payMounth',payMonth);
    // console.log('Soy el payYear',payYear);

    let payDay = `${payYear}-${payMonth}-${day}`
    // console.log(payDay);
    // const data = { id: id, enable: true , pay_day: payDay};
    const data = { id: id, enable: true};
    const respuesta = await updateBoss(data);
    // console.log('Soy la respuesta______',respuesta);

    // console.log('Soy el response.data -----------',response.data);

    // console.log(response.data.purchase_units[0].payments.captures[0]);
    //ACABO DE PEGAR ESTE CODIGO DE NUEVO
    let info = response.data;
    const dataPay = {
      ...info,
      ...response.data.purchase_units[0].payments.captures[0],
    };
    // console.log(bosss);
    sendMail(respuesta, dataPay);
    //ACABO DE PEGAR ESTE CODIGO DE NUEVO (ENVIO DE EMAIL AL REALIZAR LA COMPRA)
    //console.log(response.data.purchase_units[0].payments.captures[0].amount.value)

    res.redirect("https://crm-henry-34b.vercel.app/authentication");
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const cancelOrder = (req, res) => {
  res.redirect("https://crm-henry-34b.vercel.app/authentication");
};

module.exports = {
  createOrder,
  captureOrder,
  cancelOrder,
};
