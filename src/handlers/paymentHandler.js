require("dotenv").config();
const { sendMail } = require("../controllers/email/notifyPayBoss.js");
const axios = require("axios");
const updateBoss = require("../controllers/Bosses/updateBoss");
const { PAYPAL_API_CLIENT, PAYPAL_API_SECRET, PAYPAL_API } = process.env;

const createOrder = async (req, res) => {
  const { cantidad, id } = req.body;
  if (!cantidad) {
    let cantDefault = 1;
    let value = cantDefault * 100.0;
    var valueStr = String(value);
  } else {
    let value = cantidad * 100.0;
    var valueStr = String(value);
  }

  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: valueStr,
          },
        },
      ],
      application_context: {
        brand_name: "CRM.com",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `https://crm2.up.railway.app/api/capture-order?id=${id}`,
        cancel_url: "https://crm2.up.railway.app/api/cancel-order",
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
    // console.log(token);

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

    const data = { id: id, enable: true };
    const respuesta = await updateBoss(data);
    // console.log(respuesta);
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
    // console.log(response.data)

    res.redirect("https://crm-henry-34b.vercel.app/dashboard/perfil");
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const cancelOrder = (req, res) => {
  res.redirect("https://crm-henry-34b.vercel.app/dashboard/perfil");
};

module.exports = {
  createOrder,
  captureOrder,
  cancelOrder,
};
