const nodemailer = require("nodemailer");

const createTrans = () => {
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true, // true for 465, false for other ports
  //   auth: {
  //     user: "frankcito639@gmail.com", // generated ethereal user
  //     pass: "fnmuboojokaxxgkl", // generated ethereal password
  //   },
  // });
  const transporter = nodemailer.createTransport({
    service: "Gmail", // true for 465, false for other ports
    auth: {
      user: "jhohanjianpierre@gmail.com",
      pass: "ifhpwgudrixwaxxw",
    },
  });
  return transporter;
};
const sendMail = async (user) => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"CRM" <jhohanjianpierre@gmail.com>',
    to: `${user.email}`,
    subject: `Bienvenido a CRM ${user.name}`, // Subject line
    text: "Gracias por preferirnos!", // plain text body
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
            <td align="center" style="padding:40px 0 30px 0;background:#000000;">
            <img src="https://res.cloudinary.com/dlibclk9r/image/upload/v1673885978/morfi/p1bfi9twytb29l9dx7cd.jpg" alt="" width="602px" style="height:400px;display:block;"/>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px 42px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 36px 0;color:#153643;">
                    <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Muchas Gracias por registrarse en CRM, bienvenid@ a nuestra pagina ${user.name}.</h1>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Esperamos que disrute de nuestro servicio, si desea contactarnos puede enviar un mail a:</p>
                    <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="https://crm-front-b9a47k1in-cristopherareche.vercel.app/authentication" style="color:#11F930;text-decoration:underline;">Link de Verificación</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                          <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://res.cloudinary.com/dlibclk9r/image/upload/v1673885989/morfi/ub6tdgbykzdxxiw5l8ul.png" alt="" width="260" style="height:200px;display:block;" /></p>
                          <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Empieza a  pedir con tan solo unos clicks. Comienza cuando quieras. Estaremos a tu lado para ayudarte, brindandote una experiencia de interaccion unica.</p>
                        </td>
                        <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                        <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                          <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://res.cloudinary.com/dlibclk9r/image/upload/v1673886008/morfi/vdl8nkjeva2nqebarxb6.jpg" alt="" width="260" style="height:200px;display:block;"/></p>
                          <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Por cualquier consulta o problema tecnico contactanos a soportemorfi@gmail.com uno de nuestros representantes se pondra en contacto lo antes posible.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;background:#ee4c50;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%;" align="left">
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">Morfi, Argentina 2022<br/></p>
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

exports.sendMail = (user) => sendMail(user);