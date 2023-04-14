const nodemailer = require("nodemailer");

// NOTIFICACION AL JEFE QUE REALIZO SU PAGO CORRECTAMENTE

const createTrans = () => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // true for 465, false for other ports
    auth: {
      user: "jhohanjianpierre@gmail.com",
      pass: "ifhpwgudrixwaxxw",
    },
  });
  return transporter;
};

const sendMail = async (boss, pay) => {
  // revisar quien es user
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"Equipo de desarrollo CRM" <pfcrm23@gmail.com>',
    to: "pfcrm23@gmail.com", //Se supone que es el correo del jefe, es igual que el de PayPal?
    subject: `Su pago se ha realizado correctamente!`,
    text: `Pago del Servicio CRM`, // plain text body
    html: `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        table, td, div, h1, p {font-family: Arial, sans-serif;}
      </style>
    </head>

    <body style="margin:0;padding:0;"><table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">

        <table role="presentation" style="width:602px;height=400px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">

        
        <tr>
          <div style="position: relative; display:flex; justify-content: center; align-items: center; width: 100% ; height: 200px; background:#032a62 ">
                <img src="https://www.pngmart.com/files/4/Galaxy-PNG-HD.png" alt="" style="width="100%; height:100%;/>
          </div>
        </tr>

          <tr>
            <td style="padding:36px 30px 42px 30px; color:black;">
                <p style="font-size: 18px">
                    <span style="font-size: 28px; color:black;">Hola!! <i>${
                      pay.payment_source.paypal.name.given_name
                    } ${pay.payment_source.paypal.name.surname}</i></span>.<br>
                    <hr>
                    <span style="font-size: 18px; margin-top: 10px; color:black;"> <b>Su pago ha sido completado correctamente!</b> Gracias por confiar en nuestro CRM!</span>
                </p>
                <p style="font-size: 18px">
                    A continuación se mostrarán los <b>detalles del pago</b>:
                </p>

                <ul style="font-size: 18px; color:black;">
                    <li><b>Método de pago:</b> PayPal</li>
                    <li><b>Nombre:</b> ${
                      pay.payment_source.paypal.name.given_name
                    } ${pay.payment_source.paypal.name.surname}</li>
                    <li><b>Email:</b> ${
                      pay.payment_source.paypal.email_address
                    }</li>
                    <li><b>Fecha:</b> ${pay.create_time.slice(0, 10)}</li>
                    <li><b>Hora:</b> ${pay.create_time.slice(11, 19)}</li>
                    <li><b>Monto:</b> $${pay.amount.value} ${
      pay.amount.currency_code
    }</li>
                </ul>
                <hr>
                <p style="text-align: end; font-size: 20px; margin-right: 40px;">
                    <b>Saludos Cordiales.</b>
                    <br>
                    <i><b>Éxitos!</b></I>
                </p>
            </td>
          </tr>

          
          <tr>            
            <td style="padding:30px;background:#00002d;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%;" align="left">
                    <p style="margin:0;font-size:18px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff; font-weight: bold">Desarrollo CRM - Argentina 2023<br/></p>
                  </td>
                  <td style="padding:0;width:50%;" align="right">
                    <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding-right: 30px;width:38px; display: flex;">
                        <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.stickpng.com/images/5a2fe3efcc45e43754640848.png" alt="Twitter" width="38" style="height:38px;display:block;border:0;  padding-right: 10px;" /></a>
                          <a href="http://www.linkedin.com/" style="color: white;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" width="38" style="height:38px;display:block;border:0;" /></a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>

      </td>
    </tr>
  </table>
  </body>

</html>`, // html body
  });
  console.log("Message sent: %s", info.messageId);
  return;
};

exports.sendMail = (boss, pay) => sendMail(boss, pay);
