require("dotenv").config();
const axios = require('axios');
const { PAYPAL_API_CLIENT, PAYPAL_API_SECRET, PAYPAL_API } = process.env;

const createOrder = async (req, res) => {

    const { cantidad, monto, moneda } = req.body;
    const clientID = 1;

    try {
        const order = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: '20.00'
                    }
                }
            ],
            application_context: {
                brand_name: 'CRM.com',
                landing_page: 'LOGIN',
                user_action: 'PAY_NOW',
                return_url: `https://crm.up.railway.app/api/capture-order?clientID=${clientID}`,
                cancel_url: 'https://crm.up.railway.app/api/cancel-order'
            }
        }

        // console.log('Soy el api client', PAYPAL_API_CLIENT);
        // console.log('Soy el api secret',PAYPAL_API_SECRET);
        // console.log(PAYPAL_API);

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

        // console.log(params);

        const { data: { access_token } } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        })

        // console.log(access_token);

        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })

        res.status(200).json(response.data);


    } catch (error) {
        res.status(500).json({ error: error })
    }
}


const captureOrder = async (req, res) => {
    try {
        const { token, clientID } = req.query;

        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        });

        // console.log(clientID);

        // console.log(response.data)

        res.redirect('/')

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const cancelOrder = (req, res) => {

    res.redirect('/')

};

module.exports = {
    createOrder,
    captureOrder,
    cancelOrder
}