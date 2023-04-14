require("dotenv").config();
const { sendMail } = require("../controllers/email/notifyPayBoss.js");
const axios = require("axios");
const { PAYPAL_API_CLIENT, PAYPAL_API_SECRET, PAYPAL_API } = process.env;

const createOrder = async (req, res) => {
  const { cantidad, monto, moneda } = req.body;
  const clientID = 1;
  console.log("entre");
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "20.00",
          },
        },
      ],
      application_context: {
        brand_name: "CRM.com",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `http://localhost:6972/api/capture-order?clientID=${clientID}`,
        cancel_url: "http://localhost:6972/api/cancel-order",
      },
    };

    console.log("Soy el api client", PAYPAL_API_CLIENT);
    console.log("Soy el api secret", PAYPAL_API_SECRET);
    console.log(PAYPAL_API);

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
    const { token, clientID } = req.query;

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
    // console.log(clientID);
    // AQUI DEBERIA DE COLOCAR LA FUNCION PARA ENVIAR EL MAIL DE INFORME DE PAGO

    let info = response.data;
    const dataPay = {
      ...info,
      ...response.data.purchase_units[0].payments.captures[0],
    };
    sendMail("boss", dataPay);
    //console.log(response.data.purchase_units[0].payments.captures[0].amount.value)

    // console.log(response.data);

    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const cancelOrder = (req, res) => {
  res.redirect("/");
};

module.exports = {
  createOrder,
  captureOrder,
  cancelOrder,
};
