const method = ['Llamada', 'Correo-E']
const state = ['Pendiente', 'Concretado']

module.exports = {
    Electronicos: [
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Solicitud de información sobre aire acondicionado",
                "message": "Buenos días, estoy interesado en adquirir un aire acondicionado para mi hogar. Me gustaría conocer los modelos disponibles y sus precios. ¿Podría enviarme más información al respecto? Gracias."
            },
            {
                "method": "Llamada",
                "state": "Pendiente",
                "attached": null,
                "subject": "",
                "message": "Hola, buenos días. Llamaba para preguntar sobre los modelos de aire acondicionado que tienen disponibles. ¿Podrían darme más información al respecto?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta a su solicitud de información sobre aire acondicionado",
                "message": "Estimado cliente, le agradecemos su interés en nuestros productos. Adjunto encontrará un catálogo con los modelos disponibles y sus precios. Si tiene alguna duda, no dude en contactarnos. Saludos cordiales."
            },
            {
                "method": "Llamada",
                "state": "Pendiente",
                "attached": null,
                "subject": "",
                "message": "Gracias por enviarme el catálogo. Me interesa el modelo X, ¿podría darme más detalles al respecto?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información adicional sobre el modelo X de aire acondicionado",
                "message": "Estimado cliente, adjunto encontrará las especificaciones técnicas del modelo X. Si desea adquirirlo, por favor indíquenos cuál es su dirección de envío para poder calcular el costo del envío. Quedamos atentos a su respuesta. Saludos cordiales."
            },
            {
                "method": "Llamada",
                "state": "Concretado",
                "attached": null,
                "subject": "",
                "message": "¡Buenas noticias! He decidido comprar el modelo X. ¿Podría guiarme en el proceso de pago y envío?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y envío del aire acondicionado",
                "message": "Estimado cliente, agradecemos su compra del modelo X. Adjunto encontrará las instrucciones para realizar el pago. Una vez recibamos la confirmación del pago, procederemos con el envío y le enviaremos el número de seguimiento correspondiente. Muchas gracias por su compra. Saludos cordiales."
            }
        ],
        [
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Consulta sobre el producto",
                "message": "Hola, estoy interesado en comprar uno de tus productos. ¿Podrías darme más información al respecto?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Respuesta a la consulta",
                "message": "¡Hola! Claro, con gusto. ¿Cuál de nuestros productos te interesa específicamente? ¡Estoy aquí para ayudarte!"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Solicitud de detalles sobre el producto",
                "message": "Quisiera saber si tienes en stock el modelo X y si podrías darme más detalles sobre su tamaño y material."
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Información sobre el producto",
                "message": "¡Por supuesto! Sí, tenemos disponible el modelo X. Mide 20cm x 15cm x 10cm y está hecho de poliéster de alta calidad. ¿Te gustaría saber algo más?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Consulta sobre el envío",
                "message": "Genial, gracias por la información. ¿Podrías decirme cuánto tiempo tardaría en llegar a mi dirección? Vivo en Madrid."
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Información de envío",
                "message": "Por supuesto. El envío a Madrid tarda aproximadamente de 3 a 5 días hábiles. ¿Te gustaría que te proporcione más detalles?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Agradecimiento por la información",
                "message": "Muchas gracias por la información. Me gustaría realizar la compra. ¿Cómo puedo hacerlo?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Instrucciones de compra",
                "message": "¡Genial! Puedes realizar la compra directamente en nuestro sitio web. Te enviaré un enlace para que puedas encontrar el producto fácilmente. ¿Te parece bien?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Confirmación de compra",
                "message": "Perfecto, ya realicé la compra. ¿Podrías confirmarme que has recibido mi pedido?"
            },
            {
                "method": 'Correo-E',
                "state": 'Concretado',
                "attached": null,
                "subject": "Confirmación de pedido",
                "message": "¡Gracias por tu compra! Sí, acabo de recibir tu pedido. Comenzaremos a procesarlo de inmediato. ¿Hay algo más en lo que pueda ayudarte?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Consulta sobre la garantía",
                "message": "Sí, quisiera saber si el producto cuenta con garantía. ¿Podrías proporcionarme más información sobre eso?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Información de garantía",
                "message": "Claro, todos nuestros productos cuentan con una garantía de 1 año. Si tienes algún problema, puedes contactarnos y estaremos encantados de ayudarte. ¿Necesitas algo más?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Consulta sobre la devolución",
                "message": "Entiendo. Quisiera saber si podría devolver el producto si no es lo que esperaba. ¿Cómo funciona el proceso de devolución?"
            },
            {
                "method": 'Correo-E',
                "state": 'Pendiente',
                "attached": null,
                "subject": "Información de devolución",
                "message": "Por supuesto, puedes devolver el producto dentro de los 30 días posteriores a la entrega. El proceso es sencillo: solo debes ponerte en contacto con nosotros y te proporcionaremos las instrucciones necesarias. ¿Te gustaría saber algo más?"
            }

        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre lavadoras",
                "message": "Buenos días, estoy interesado en comprar una lavadora y me gustaría saber si tienen en stock el modelo XYZ de 10 kg de carga. Además, me gustaría saber si realizan envíos a domicilio y cuánto tiempo demoraría en llegar. Quedo atento a su respuesta. Saludos cordiales."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta sobre lavadora modelo XYZ",
                "message": "Buenas tardes, agradecemos su consulta. Sí, contamos con el modelo XYZ de 10 kg de carga en stock. Además, realizamos envíos a domicilio sin costo adicional en un plazo de 48 horas. ¿Desea que procedamos con su pedido?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de compra lavadora modelo XYZ",
                "message": "Muchas gracias por su respuesta. Me interesa adquirir la lavadora modelo XYZ de 10 kg de carga. ¿Cuál sería el costo total y cómo podría realizar el pago?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información de pago para lavadora modelo XYZ",
                "message": "Estimado cliente, el costo total de la lavadora modelo XYZ de 10 kg de carga es de $500. Para realizar el pago, puede hacer una transferencia bancaria o pagar en efectivo en nuestra tienda física. En caso de que desee la opción de transferencia bancaria, le enviaremos la información pertinente a su correo electrónico. Esperamos su pronta respuesta."
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y entrega de lavadora modelo XYZ",
                "message": "Estimado cliente, hemos recibido su pago y procederemos a enviar la lavadora modelo XYZ de 10 kg de carga a la dirección indicada. El plazo de entrega será de 48 horas. Si tiene alguna consulta adicional, no dude en contactarnos. Muchas gracias por su compra."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta por televisores",
                "message": "Buenos días, quisiera saber si tienen televisores de 55 pulgadas en stock y cuál sería el precio. Muchas gracias."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Disponibilidad del televisor",
                "message": "Buenos días, sí, tenemos en stock televisores de 55 pulgadas de la marca Samsung a un precio de $1500. ¿Le gustaría realizar la compra?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Solicitud de información adicional",
                "message": "Sí, estoy interesado en comprar el televisor. ¿Podría decirme si incluye alguna garantía? Y también quisiera saber si se puede hacer el pago con tarjeta de crédito."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Detalles de la venta",
                "message": "Por supuesto, el televisor incluye una garantía de un año por cualquier defecto de fábrica. Y sí, aceptamos pagos con tarjeta de crédito. Si está de acuerdo, podemos coordinar la entrega del televisor."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de entrega",
                "message": "Excelente, estoy de acuerdo. Me gustaría realizar el pago con tarjeta de crédito y recibir el televisor en mi domicilio. ¿Podría por favor indicarme cómo proceder para realizar el pago y coordinar la entrega?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de pago y entrega",
                "message": "Para realizar el pago, le enviaremos un enlace a través del cual podrá ingresar los datos de su tarjeta de crédito de manera segura. En cuanto recibamos el pago, coordinaremos la entrega del televisor en un plazo máximo de 3 días hábiles. ¿Le parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Agradecimiento y despedida",
                "message": "Perfecto, muchas gracias por la atención y la prontitud en la respuesta. Realizaré el pago lo antes posible. ¡Hasta pronto!"
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre radio X",
                "message": "Hola, me interesa la radio X que tienen en su tienda en línea. ¿Podrían darme más detalles sobre sus características y precio?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta sobre radio X",
                "message": "¡Hola! Claro que sí, la radio X cuenta con 10 memorias de estaciones, pantalla LCD retroiluminada y entrada para USB y tarjetas SD. Su precio es de $100 USD. ¿Te gustaría proceder con la compra?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de compra de radio X",
                "message": "¡Sí, me interesa comprarla! ¿Cuáles son las formas de pago y envío disponibles?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Opciones de pago y envío",
                "message": "Puedes pagar con tarjeta de crédito a través de nuestra página web o mediante transferencia bancaria. El envío se realiza a través de nuestro servicio de paquetería y tarda de 3 a 5 días hábiles. ¿Cuál prefieres?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y envío de radio X",
                "message": "¡Genial! He realizado el pago con mi tarjeta de crédito. Por favor, envíenme la radio a la dirección que proporcioné en mi pedido. Muchas gracias."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Solicitud de información sobre Laptop",
                "message": "Buenas tardes, me gustaría obtener más información sobre la Laptop que vi en su sitio web. ¿Podría enviarme las especificaciones técnicas y el precio?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información sobre Laptop",
                "message": "Claro, con gusto le puedo enviar la información que solicita. La Laptop cuenta con un procesador Intel Core i7, 16GB de RAM y 512GB de almacenamiento en disco sólido. Su precio es de $1,200. ¿Le gustaría realizar la compra?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Aceptación de compra de Laptop",
                "message": "Sí, me gustaría comprar la Laptop. ¿Cuál es el método de pago y cuándo podríamos recibirla?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de pago y entrega de Laptop",
                "message": "Puede realizar el pago con tarjeta de crédito a través de nuestra web. En cuanto recibamos el pago, enviaremos la Laptop en los próximos 2 días hábiles. ¿Le parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y entrega de Laptop",
                "message": "Recibimos su pago y hemos enviado la Laptop. El número de seguimiento es XYZ123. Gracias por su compra."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre el celular disponible en su tienda",
                "message": "Buenos días, quisiera saber si aún tienen disponible el celular marca X que vi en su tienda online. ¿Podría proporcionarme más información al respecto?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta a su consulta",
                "message": "¡Hola! Sí, todavía tenemos el modelo X disponible. ¿Le gustaría saber más acerca de las características del celular o tiene alguna otra pregunta?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Aclaraciones sobre el celular X",
                "message": "Sí, me gustaría conocer más detalles sobre el celular, en especial las opciones de pago y la fecha de entrega. ¿Podría ayudarme con eso?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información sobre pago y entrega",
                "message": "Por supuesto. Podemos ofrecerle opciones de pago con tarjeta de crédito o transferencia bancaria. Una vez que se confirme el pago, enviaremos el celular en los próximos 2 días hábiles. ¿Le parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Aceptación de las condiciones",
                "message": "¡Genial! Me gustaría hacer el pago con mi tarjeta de crédito y recibir el celular lo antes posible. Por favor, indíquenme los pasos a seguir para hacer el pago."
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y entrega",
                "message": "Recibimos su pago correctamente. Estamos procesando su pedido y en las próximas 48 horas recibirá un correo con el número de seguimiento y la fecha estimada de entrega. ¡Gracias por su compra!"
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Solicitud de información sobre impresoras",
                "message": "Buenos días, estoy interesado en adquirir una impresora de alta calidad para uso en mi oficina. ¿Podrían proporcionarme más información sobre las opciones que tienen disponibles?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta a solicitud de información sobre impresoras",
                "message": "¡Buen día! Claro que sí, contamos con varios modelos de impresoras de alta calidad que podrían ser de su interés. ¿Podría indicarnos qué características son las más importantes para usted en una impresora?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Detalle de características de la impresora seleccionada",
                "message": "¡Hola! Basado en las características que nos ha mencionado, le recomendamos nuestra impresora modelo XYZ. Esta impresora ofrece una alta calidad de impresión, es compatible con varios tipos de papel y tiene una velocidad de impresión de hasta 30 páginas por minuto. ¿Le gustaría recibir más detalles sobre este modelo?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de compra de la impresora",
                "message": "Me parece una excelente opción. ¿Podrían por favor confirmar el precio y disponibilidad de este modelo? También quisiera saber cuál sería el proceso de pago y envío."
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de compra y envío de la impresora",
                "message": "Claro que sí, el precio de la impresora XYZ es de $500 y tenemos unidades disponibles en stock. En cuanto al pago, aceptamos transferencias bancarias y pagos con tarjeta de crédito a través de nuestra plataforma en línea. En cuanto recibamos el pago, procederemos a enviar la impresora en los próximos 2 días hábiles. ¿Le parece bien?"
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta por secadora",
                "message": "Hola, estoy interesado en comprar una secadora y me gustaría saber qué modelos tienen disponibles y sus precios. ¿Podrían enviarme esa información?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información de modelos y precios",
                "message": "Buenas tardes, le enviamos un catálogo con los modelos disponibles y sus respectivos precios. Esperamos que encuentre el que mejor se ajuste a sus necesidades. Quedamos a la espera de su respuesta."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": "Catálogo.pdf",
                "subject": "Compra de secadora",
                "message": "Muchas gracias por enviarme el catálogo. He revisado los modelos y me gustaría adquirir la secadora modelo X por un precio de $500. ¿Cómo puedo hacer el pago y cuándo podrían entregármela?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Pago y entrega de secadora",
                "message": "Para realizar el pago puede hacer una transferencia bancaria o utilizar una tarjeta de crédito. Una vez que confirmemos el pago, podríamos entregarle la secadora en un plazo de 3 días hábiles. ¿Le parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y entrega",
                "message": "Excelente, procederé a realizar el pago mediante transferencia bancaria en las próximas horas. Agradezco su atención y eficiencia en la gestión de mi compra."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre batidoras",
                "message": "Buenos días, me gustaría saber si tienen batidoras de mano en stock y cuáles son las características de las mismas."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta sobre batidoras de mano",
                "message": "¡Hola! Sí, tenemos batidoras de mano disponibles en varios modelos. ¿Está buscando alguna característica en particular? Podemos brindarle más información para ayudarle a tomar una decisión."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Solicitud de información sobre la batidora de mano modelo X",
                "message": "¡Gracias por la respuesta! Me interesa conocer más sobre la batidora de mano modelo X. ¿Podrían enviarme más información sobre sus características y precio?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información detallada sobre la batidora de mano modelo X",
                "message": "Por supuesto, aquí tiene toda la información que necesita: [adjunto ficha técnica] ¿Tiene alguna otra consulta o duda sobre la batidora?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de compra de batidora de mano modelo X",
                "message": "¡Gracias por la información detallada! Estoy interesado en comprar la batidora de mano modelo X. ¿Cuál es el proceso de compra y pago?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Proceso de compra y pago",
                "message": "¡Genial! El proceso de compra es muy sencillo. Puede realizar el pago a través de nuestra web con tarjeta de crédito o transferencia bancaria. En cuanto recibamos el pago, procederemos a enviarle la batidora de mano en un plazo de 3 días hábiles. ¿Le parece bien?"
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre cafetera",
                "message": "Buenas tardes, me interesa la cafetera que vi en su sitio web. Me gustaría saber si tienen disponibilidad y cuál es el precio."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información sobre la cafetera",
                "message": "Claro, la cafetera está disponible y tiene un precio de $200. Además, tiene capacidad para preparar hasta 10 tazas de café. ¿Le interesa realizar la compra?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de compra de cafetera",
                "message": "Sí, me interesa comprarla. ¿Cómo puedo hacer el pago y cuándo podrían entregármela?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Pago y entrega de la cafetera",
                "message": "Para realizar el pago puede hacerlo mediante transferencia bancaria o con tarjeta de crédito a través de nuestra web. En cuanto recibamos el pago, podríamos enviar la cafetera en los próximos 3 días hábiles. ¿Le parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y entrega de la cafetera",
                "message": "Excelente, acabo de realizar el pago mediante transferencia bancaria. Espero recibir la cafetera pronto. Muchas gracias por toda la atención."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta por compra de PC",
                "message": "Hola, estoy interesado en adquirir una PC para juegos de última generación. ¿Podrían darme información sobre los modelos disponibles y los precios?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Modelos de PC disponibles",
                "message": "Buenos días, tenemos una amplia variedad de modelos de PC para juegos, con diferentes características y precios. Le adjuntamos un catálogo con los modelos disponibles y sus precios. ¿Desea que le indiquemos las características de cada modelo?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": "catálogo de modelos y precios",
                "subject": "Información adicional",
                "message": "Gracias por el catálogo, me gustaría saber más sobre las características del modelo X y si hay disponibilidad en stock."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información sobre el modelo X",
                "message": "El modelo X cuenta con un procesador de última generación, tarjeta gráfica de alta capacidad, 16GB de RAM y un disco duro de 1TB. Tenemos disponibilidad en stock de este modelo. ¿Desea realizar la compra?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Compra de PC",
                "message": "Sí, me interesa comprar el modelo X. ¿Cómo puedo realizar el pago y cuál sería el tiempo de entrega?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Pago y entrega",
                "message": "Puede realizar el pago a través de transferencia bancaria o con tarjeta de crédito en nuestra página web. Una vez que se haya realizado el pago, se procederá a la entrega en los próximos 5 días hábiles. ¿Le parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de pago y entrega",
                "message": "Perfecto, realizaré el pago mediante transferencia bancaria. Muchas gracias por toda la información y la atención brindada."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre Bocina Marca X",
                "message": "Buenos días, estoy interesado en adquirir una bocina Marca X que he visto en su página web. Me gustaría saber si la tienen en stock y cuál es el precio."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Respuesta sobre disponibilidad y precio de la Bocina Marca X",
                "message": "Buen día, sí contamos con la bocina Marca X en stock. El precio actual es de $200 y el envío es gratuito dentro del territorio nacional. ¿Deseas realizar la compra?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Aceptación de compra de la Bocina Marca X",
                "message": "Hola, sí me gustaría comprar la bocina. ¿Cómo puedo hacer el pago y cuándo podré recibir el producto?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de pago y entrega de la Bocina Marca X",
                "message": "Puedes hacer el pago con tarjeta de crédito a través de nuestra página web. Una vez confirmado el pago, te enviaremos la bocina en los próximos 3 días hábiles. ¿Estás de acuerdo?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de envío de la Bocina Marca X",
                "message": "Te informamos que ya hemos recibido el pago y que hemos enviado la bocina Marca X a la dirección que nos proporcionaste. Esperamos que disfrutes del producto. ¡Gracias por tu compra!"
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre el robot de limpieza",
                "message": "Buenas tardes, me gustaría saber si tienen en stock el robot de limpieza que vi en su web y si es posible hacer envío a mi ciudad. Muchas gracias."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación de stock y envío",
                "message": "Hola, sí tenemos en stock el robot de limpieza que viste en nuestra página web. Hacemos envíos a todo el país. ¿Podrías proporcionarnos tu dirección para cotizar el envío? Saludos."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Aceptación del costo de envío",
                "message": "Muchas gracias por la pronta respuesta. Mi dirección es XYZ. Me gustaría saber cuál sería el costo de envío. Saludos."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Cotización del costo de envío",
                "message": "Hola, el costo de envío a tu dirección es de $XX. ¿Te parece bien? Saludos."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Aceptación del costo y forma de pago",
                "message": "Sí, me parece bien el costo de envío. ¿Cómo puedo hacer el pago? ¿Cuándo podría recibir el robot de limpieza en mi domicilio? Saludos."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Confirmación del pago y envío del robot de limpieza",
                "message": "Para realizar el pago puedes hacerlo mediante transferencia bancaria o con tarjeta de crédito a través de nuestra web. En cuanto recibamos el pago, enviaremos el robot de limpieza en los próximos 2 días hábiles. ¿Te parece bien? Saludos."
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Agradecimiento y despedida",
                "message": "Muchas gracias por tu compra y confianza en nuestros productos. El robot de limpieza ya fue enviado a tu dirección. Esperamos que sea de tu agrado. Saludos cordiales."
            }
        ],
        [
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Consulta sobre ventiladores",
                "message": "Buenas tardes, estoy interesado en comprar un ventilador para mi hogar y me gustaría conocer más detalles sobre los modelos que ofrecen."
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Detalles sobre ventiladores disponibles",
                "message": "¡Hola! Claro, contamos con varios modelos de ventiladores de diferentes tamaños y potencias. ¿Hay algún modelo en particular que estés buscando?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Información sobre el modelo de ventilador de escritorio",
                "message": "Sí, estoy buscando un modelo de ventilador de escritorio con 3 velocidades y oscilación. ¿Tienen alguno disponible con esas características?"
            },
            {
                "method": "Correo-E",
                "state": "Pendiente",
                "attached": null,
                "subject": "Modelo de ventilador de escritorio disponible",
                "message": "¡Claro! Tenemos disponible el modelo 'Ventilador de escritorio Turbo 3000' con las características que mencionas. Tiene un precio de $50. ¿Te interesa comprarlo?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de compra del ventilador de escritorio",
                "message": "¡Genial! Me interesa mucho ese modelo. Por favor, ¿cómo puedo hacer el pago y cuándo podría recibir el ventilador en mi domicilio?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Pago y envío del ventilador",
                "message": "Puedes hacer el pago con tarjeta de crédito a través de nuestra página web, o si lo prefieres, puedes hacer una transferencia bancaria. En cuanto recibamos el pago, enviaremos el ventilador en los próximos 2 días hábiles. ¿Te parece bien?"
            },
            {
                "method": "Correo-E",
                "state": "Concretado",
                "attached": null,
                "subject": "Confirmación de recepción del ventilador",
                "message": "¡Perfecto! Realizaré el pago mediante transferencia bancaria hoy mismo. Muchas gracias por toda la información."
            }
        ]
    ],
}