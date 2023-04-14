const nodemailer = require("nodemailer");

// NOTIFICACION CLIENTE PARA SOLICITAR UN FEEDBACK HACIA EL VENDEDOR

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

const sendMailFeedback = async (salesman, client, activity) => {
  // revisar quien es user
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"Equipo de desarrollo CRM" <pfcrm23@gmail.com>',
    to: client.email, //DEBE DE IR EL CORREO DEL CLIENTE
    subject: `Dar una valoración al vendedor!`,
    text: `Gracias por haberte contactado con nosotros!`, // plain text body
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
            <td style="padding:36px 30px 42px 30px;">
                <p style="font-size: 18px">
                    <span style="font-size: 28px">Hola!! <i>${client.name}</i></span>.<br>
                    <hr>
                    <span style="font-size: 18px; margin-top: 10px;">Nos da gusto saber que la negociación ha sido Concretada</span>
                </p>
                <p style="font-size: 18px">
                    Le agradeceriamos que de un Feedback (una valoración) respecto a la atención brindada por nuestro vendedor/a <b>${salesman.name}</b>, ya que seria
                    de muchisima utilidad para ir mejorando aún más.
                </p>
                
                <a href="http://www.google.com">
                  <div style="margin:auto; width: 300px; height: 50px; background: blue; color: white; display:flex; justify-content: center; align-items: center">
                    <p style="font-weight: bold; font-size: 20px; margin:auto; text-align: center"> DAR VALORACIÓN </p>
                  </div>
                </a>

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

exports.sendMailFeedback = (salesman, client, activity) =>
  sendMailFeedback(salesman, client, activity);
