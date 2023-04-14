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
//lo que recibimos tambien en activity={method,state,from,to,message,subject,attached,clientId,salesmanId,}
const sendMail = async (salesman, client, activity, estado) => {
  const transporter = createTrans(); //introducir como parametro el correo y la contra del vendedor // EIMINE DE LOS PARAMMETROS DE createTrans() salesman
  const info = await transporter.sendMail({
    from: '"Equipo de desarrollo CRM" <pfcrm23@gmail.com>',
    to: client.email, //Aqui se le envia al cliente RECORDAR COLOCAR `${client.email}`
    subject:
      estado === "creacion"
        ? "Se ha registrado nueva actividad con tu vendedor!!"
        : "Ha habido un cambio en tu estado de compra!!",
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
              <div style="position: relative; display:flex; justify-content: center; align-items: center; width: 100% ; height: 200px; background:#032a62 ">
                <img src="https://www.pngmart.com/files/4/Galaxy-PNG-HD.png" alt="" style="width="100%; height:100%;/>
              </div>
          </tr>

          <tr>
            <td style="padding:36px 30px 42px 30px;">
                <p style="font-size: 18px;">
                    <span style="font-size: 28px">Hola!! ${client.name}.</span>
                    <br>
                    <hr style="margin-bottom: 15px;">
                    <span style="font-size: 18px;">
                    ${
                      estado === "creacion"
                        ? `Se ha <b>registrado una actividad</b> en la plataforma en tu proceso de negociación. <br>
                    El estado de negociación de tu producto se encuentra en estado <b>"${activity.state}"</b>.`
                        : `Se ha <b>registrado un cambio de actividad</b> en la plataforma en tu proceso de negociación. <br>
                    El estado de negociación de tu producto ahora se encuentra en estado <b>"${activity.state}", (su estado anterior de negociación era ${activity.statePrev})</b>.`
                    }
                    </span>
                </p>
                <p style="font-size: 18px;">
                    Aqui te damos más información referente a tu <b>actividad con el vendedor</b> en el <b>proceso de compra de tu producto</b>:
                    <br>
                    <ul style="font-size: 18px;">
                        <li> <b>Vendedor:</b> ${activity.from} </li>
                        <li> <b>Método de Contacto:</b> ${activity.method} </li>
                        <li> <b>Estado de compra:</b> ${activity.state} </li>
                        <li> <b>Asunto:</b> ${activity.subject} </li>
                    </ul>
                    
                  <br>
                  <span style="font-size: 18px;">En instantes recibirá más información respecto al Producto.</span>
                </p>
                <hr>
                <p style="text-align: end; font-size: 20px; margin-right: 40px;">
                    Saludos Cordiales!
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

      </td>
    </tr>
  </table>
  </body>

</html>`, // html body
  });
  console.log("Message sent: %s", info.messageId);
  return;
};

exports.sendMail = (salesman, client, activity, estado) =>
  sendMail(salesman, client, activity, estado);
