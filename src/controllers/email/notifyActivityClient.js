const nodemailer = require("nodemailer");

// NOTIFICACION AL CLIENTE CUANDO CAMBIA SU ESTADO DE NEGOCIACION

// SE LE DEBE DE NOTICIAR AL CLIENTE DE PARTE DEL VENDEDOR

const createTrans = () => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // true for 465, false for other ports
    //CORREOS DEL VENDEDOR
    auth: {
      user: "jhohanjianpierre@gmail.com",
      pass: "ifhpwgudrixwaxxw",
    },
  });
  return transporter;
};

const sendMail = async (salesman, client, activity, estado) => {
  const transporter = createTrans(salesman); //introducir como parametro el correo y la contra del vendedor
  const info = await transporter.sendMail({
    from: '"Equipo de desarrollo CRM" <pfcrm23@gmail.com>',
    to: "pfcrm23@gmail.com", //Se supone que es el correo del jefe
    subject:
      estado === "creacion"
        ? "Estado de tu compra!!!"
        : "Ha habido un cambio en tu proceso!!!",
    text: `Ha habido un cambio de tu proceso de compra`, // plain text body
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
            <td style="padding:36px 30px 42px 30px;">
                <p>
                    Hola!! ${client.name}, Se ha registrado un cambio en la plataforma en tu proceso de negociación, el estado de tu proceso se encuentra ${activity.state}.
                </p>
                <p>
                    aqui te damos mas información referente a tu proceso de compra de tu producto 
                    <br>
                    
                    <ul>
                        <li> activity.method </li>
                        <li> activity.from </li>
                        <li> activity.message </li>
                        <li> activity.subject </li>
                        <li> activity.attack </li>
                        <li> precio del producto </li>
                    </ul>
              
                </p>

                <p>
                    Exitos!
                </p>
            </td>
          </tr>
          <tr>
            <tr>
                <td align="center" style="padding:40px 0 30px 0;background:#000000;">
                    <img src="https://res.cloudinary.com/dlibclk9r/image/upload/v1673885978/morfi/p1bfi9twytb29l9dx7cd.jpg" alt="" width="602px" style="height:400px;display:block;"/>
                </td>
            </tr>
            <td style="padding:30px;background:#ee4c50;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%;" align="left">
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">Desarrollo CRM -Argentina 2023<br/></p>
                  </td>
                  <td style="padding:0;width:50%;" align="right">
                    <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                        </td>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
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

exports.sendMail = () => sendMail(salesman, client, activity, estado);
