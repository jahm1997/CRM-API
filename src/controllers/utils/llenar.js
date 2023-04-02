// const activity = require('./activity')
const bosses = [
  {
    name: "Leanne Graham",
    username: "Bret",
    company: "Romaguera-Crona",
    company_description: "Multi-layered client-server neural-net",
    commercial_register: "harnessrealmarkets",
    address: "Kulas Light Apt. 556, Gwenborough",
    email: "Sincere@april.biz",
    phone: 982654357,
    logo: "hildegard.org",
    enable: true,
  },
  {
    name: "Robert Pickman",
    username: "Rob",
    company: "Great Company City",
    company_description: "The first company of the citynetwork",
    commercial_register: "RobJobMarket",
    address: "Av Manco Capac, Calle 13, Colombia",
    email: "robpick@gmail.com",
    phone: 982654357,
    logo: "GreatCity.org",
    enable: true,
  },
  {
    name: "Raquel Montgomery",
    username: "Mony",
    company: "Montgomery Club",
    company_description: "The top club of the city",
    commercial_register: "Mostful experience",
    address: "Hight Avenue 523, Londres",
    email: "raquelmont@gmail.com",
    phone: 982654357,
    logo: "Montgomery.org",
    enable: true,
  }
];

const salesmans = [
  [
    {
      name: "Clementine Bauch",
      address: "Kulas Light Apt. 556, Gwenborough",
      email: "Sincere@april.biz",
      phone: 982654357,
      enable: true,
    },
    {
      name: "Patricia Lebsack",
      address: "Hoeger Mall Apt. 692, South Elvis",
      email: "patyleb@gmail.com",
      phone: 931709623,
      enable: true,
    },
    {
      name: "Chelsey Dietrich",
      address: "Kulas Light Suite 351, Roscoeview",
      email: "chel@gmail.com",
      phone: 954461289,
      enable: true,
    },
    {
      name: "Mrs. Dennis Schulist",
      address: "Norberto Crossing Apt. 950, South Christy",
      email: "dennischule@april.biz",
      phone: 779358478,
      enable: true,
    },
    {
      name: "Kurtis Weissnat",
      address: "Rex Trail Suite 280, Howemouth",
      email: "kurtis654@april.biz",
      phone: 100676132,
      enable: true,
    }
  ],
  [
    {
      name: "Clemen Birty",
      address: "Kulas Light Apt. 556, Gwenborough",
      email: "Sincere@april.biz",
      phone: 982654357,
      enable: true,
    },
    {
      name: "Patty Lebron",
      address: "Hoeger Mall Apt. 692, South Elvis",
      email: "patyleb@gmail.com",
      phone: 931709623,
      enable: true,
    },
    {
      name: "Chelsy Diurn",
      address: "Kulas Light Suite 351, Roscoeview",
      email: "chel@gmail.com",
      phone: 954461289,
      enable: true,
    },
    {
      name: "Mrs. Maych Schuls",
      address: "Norberto Crossing Apt. 950, South Christy",
      email: "dennischule@april.biz",
      phone: 779358478,
      enable: true,
    },
    {
      name: "Kurt Cobein",
      address: "Rex Trail Suite 280, Howemouth",
      email: "kurtis654@april.biz",
      phone: 100676132,
      enable: true,
    }
  ],
  [
    {
      name: "Barbara Clement",
      address: "Kulas Light Apt. 556, Gwenborough",
      email: "Sincere@april.biz",
      phone: 982654357,
      enable: true,
    },
    {
      name: "Patricio Liwinsky",
      address: "Hoeger Mall Apt. 692, South Elvis",
      email: "patyleb@gmail.com",
      phone: 931709623,
      enable: true,
    },
    {
      name: "Rowinda Malloc",
      address: "Kulas Light Suite 351, Roscoeview",
      email: "chel@gmail.com",
      phone: 954461289,
      enable: true,
    },
    {
      name: "Barbara Gordon",
      address: "Norberto Crossing Apt. 950, South Christy",
      email: "dennischule@april.biz",
      phone: 779358478,
      enable: true,
    },
    {
      name: "Kurtler Murdoc",
      address: "Rex Trail Suite 280, Howemouth",
      email: "kurtis654@april.biz",
      phone: 100676132,
      enable: true,
    }
  ]
];

const clients = [
  [
    {
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      vip: true,
      enable: true,
    },
    {
      name: "Nicholas Runolfsdottir V",
      email: "nicholass56@runol.env",
      phone: "586.493.6943 x140",
      vip: true,
      enable: true,
    },
    {
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      vip: true,
      enable: true,
    },
    {
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      vip: true,
      enable: true,
    },
    {
      name: "Eren Jaeger",
      email: "eren666@gmail.com",
      phone: "010-352-66893",
      vip: true,
      enable: true,
    },
    {
      name: "Blue Stallon",
      email: "stall@unread.ufc",
      phone: "010-154-3265",
      vip: true,
      enable: true,
    },
    {
      name: "Jhon Cena",
      email: "cenamas@ufc.red",
      phone: "010-789-3245",
      vip: true,
      enable: true,
    },
    {
      name: "Derek Mccoy",
      email: "derekmc@gmail.com",
      phone: "956-324-1578",
      vip: true,
      enable: true,
    },
    {
      name: "Elizabeth Olsen",
      email: "olsenplus@eli.ogh",
      phone: "1365-321-498",
      vip: true,
      enable: true,
    },
    {
      name: "Melissa Fortune",
      email: "fortune@great.kfl",
      phone: "946-777-3164",
      vip: true,
      enable: true,
    }
  ],
  [
    {
      name: "Erica Hogwards",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      vip: true,
      enable: true,
    },
    {
      name: "Nichol Rumplestin IV",
      email: "nicholass56@runol.env",
      phone: "586.493.6943 x140",
      vip: true,
      enable: true,
    },
    {
      name: "Glenn Macvert",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      vip: true,
      enable: true,
    },
    {
      name: "Elena Gilbert",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      vip: true,
      enable: true,
    },
    {
      name: "Ian Somelharder",
      email: "eren666@gmail.com",
      phone: "010-352-66893",
      vip: true,
      enable: true,
    },
    {
      name: "Bonnie Bennet",
      email: "stall@unread.ufc",
      phone: "010-154-3265",
      vip: true,
      enable: true,
    },
    {
      name: "Klein Moriarty",
      email: "cenamas@ufc.red",
      phone: "010-789-3245",
      vip: true,
      enable: true,
    },
    {
      name: "Sherlock Holmes",
      email: "derekmc@gmail.com",
      phone: "956-324-1578",
      vip: true,
      enable: true,
    },
    {
      name: "Dwain Bulster",
      email: "olsenplus@eli.ogh",
      phone: "1365-321-498",
      vip: true,
      enable: true,
    },
    {
      name: "Audrey Hart",
      email: "fortune@great.kfl",
      phone: "946-777-3164",
      vip: true,
      enable: true,
    }
  ],
  [
    {
      name: "Benson Moriarty",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      vip: true,
      enable: true,
    },
    {
      name: "Nicola Tesla",
      email: "nicholass56@runol.env",
      phone: "586.493.6943 x140",
      vip: true,
      enable: true,
    },
    {
      name: "Mark Ruffalo",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      vip: true,
      enable: true,
    },
    {
      name: "Nell Macvarty",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      vip: true,
      enable: true,
    },
    {
      name: "Tommas Rodriguez",
      email: "eren666@gmail.com",
      phone: "010-352-66893",
      vip: true,
      enable: true,
    },
    {
      name: "Frederic Maquiavelo",
      email: "stall@unread.ufc",
      phone: "010-154-3265",
      vip: true,
      enable: true,
    },
    {
      name: "Franco Escamilla",
      email: "cenamas@ufc.red",
      phone: "010-789-3245",
      vip: true,
      enable: true,
    },
    {
      name: "Hector Rouges",
      email: "derekmc@gmail.com",
      phone: "956-324-1578",
      vip: true,
      enable: true,
    },
    {
      name: "Mirella Montalvo",
      email: "olsenplus@eli.ogh",
      phone: "1365-321-498",
      vip: true,
      enable: true,
    },
    {
      name: "Ximena Mcgonagall",
      email: "fortune@great.kfl",
      phone: "946-777-3164",
      vip: true,
      enable: true,
    }
  ],
  [
    {
      name: "Miranda Puppet",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      vip: true,
      enable: true,
    },
    {
      name: "Nicolas Montalvo",
      email: "nicholass56@runol.env",
      phone: "586.493.6943 x140",
      vip: true,
      enable: true,
    },
    {
      name: "Cynthia Bravo",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      vip: true,
      enable: true,
    },
    {
      name: "Eloisa Fors",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      vip: true,
      enable: true,
    },
    {
      name: "Joaquin Perez",
      email: "eren666@gmail.com",
      phone: "010-352-66893",
      vip: true,
      enable: true,
    },
    {
      name: "Silvester Stallon",
      email: "stall@unread.ufc",
      phone: "010-154-3265",
      vip: true,
      enable: true,
    },
    {
      name: "Maria Inclair",
      email: "cenamas@ufc.red",
      phone: "010-789-3245",
      vip: true,
      enable: true,
    },
    {
      name: "Juan David Suarez",
      email: "derekmc@gmail.com",
      phone: "956-324-1578",
      vip: true,
      enable: true,
    },
    {
      name: "Milagros Garcia",
      email: "olsenplus@eli.ogh",
      phone: "1365-321-498",
      vip: true,
      enable: true,
    },
    {
      name: "Luxana Goldstein",
      email: "fortune@great.kfl",
      phone: "946-777-3164",
      vip: true,
      enable: true,
    }
  ],
  [
    {
      name: "Armando Rockfeller",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      vip: true,
      enable: true,
    },
    {
      name: "Stephen King",
      email: "nicholass56@runol.env",
      phone: "586.493.6943 x140",
      vip: true,
      enable: true,
    },
    {
      name: "Juan Duarte",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      vip: true,
      enable: true,
    },
    {
      name: "Moises Cabrera",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      vip: true,
      enable: true,
    },
    {
      name: "Alan Walker",
      email: "eren666@gmail.com",
      phone: "010-352-66893",
      vip: true,
      enable: true,
    },
    {
      name: "Zac Snyder",
      email: "stall@unread.ufc",
      phone: "010-154-3265",
      vip: true,
      enable: true,
    },
    {
      name: "Henry Cavill",
      email: "cenamas@ufc.red",
      phone: "010-789-3245",
      vip: true,
      enable: true,
    },
    {
      name: "Ernest Grandgustin",
      email: "derekmc@gmail.com",
      phone: "956-324-1578",
      vip: true,
      enable: true,
    },
    {
      name: "Alisson Graviejo",
      email: "olsenplus@eli.ogh",
      phone: "1365-321-498",
      vip: true,
      enable: true,
    },
    {
      name: "Frodo Min",
      email: "fortune@great.kfl",
      phone: "946-777-3164",
      vip: true,
      enable: true,
    }
  ]
];

const products = [
  [
    {
      name: "Microondas",
      quantity: 20,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Electrodomésticos"
    },
    {
      name: "Lavadora",
      quantity: 10,
      enable: true,
      cost_price: 600,
      sale_price: 900,
      discount: 50,
      category: "Electrodomésticos"
    },
    {
      name: "Licuadora",
      quantity: 40,
      enable: true,
      cost_price: 100,
      sale_price: 200,
      discount: 10,
      category: "Electrodomésticos"
    },
    {
      name: "Extractor",
      quantity: 25,
      enable: true,
      cost_price: 200,
      sale_price: 350,
      discount: 25,
      category: "Electrodomésticos"
    },
    {
      name: "Televisor",
      quantity: 35,
      enable: true,
      cost_price: 1200,
      sale_price: 1500,
      discount: 100,
      category: "Electrodomésticos"
    },
    {
      name: "Radio",
      quantity: 30,
      enable: true,
      cost_price: 1000,
      sale_price: 1300,
      discount: 80,
      category: "Electrodomésticos"
    },
    {
      name: "Laptop",
      quantity: 50,
      enable: true,
      cost_price: 3000,
      sale_price: 4000,
      discount: 200,
      category: "Tecnológicos"
    },
    {
      name: "Celular",
      quantity: 50,
      enable: true,
      cost_price: 900,
      sale_price: 1200,
      discount: 100,
      category: "Tecnológicos"
    },
    {
      name: "Refrigerador",
      quantity: 18,
      enable: true,
      cost_price: 800,
      sale_price: 1000,
      discount: 80,
      category: "Electrodomésticos"
    },
    {
      name: "Cámara",
      quantity: 30,
      enable: true,
      cost_price: 1000,
      sale_price: 1200,
      discount: 100,
      category: "Tecnológicos"
    },
    {
      name: "Impresora",
      quantity: 20,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Tecnológicos"
    },
    {
      name: "Escáner",
      quantity: 15,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 40,
      category: "Tecnológicos"
    },
    {
      name: "Secadora",
      quantity: 25,
      enable: true,
      cost_price: 500,
      sale_price: 700,
      discount: 60,
      category: "Electrodomésticos"
    },
    {
      name: "Batidora",
      quantity: 10,
      enable: true,
      cost_price: 200,
      sale_price: 350,
      discount: 20,
      category: "Electrodomésticos"
    },
    {
      name: "Horno Eléctrico",
      quantity: 10,
      enable: true,
      cost_price: 700,
      sale_price: 1000,
      discount: 100,
      category: "Electrodomésticos"
    },
    {
      name: "Cafetera",
      quantity: 25,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 60,
      category: "Electrodomésticos"
    },
    {
      name: "PC",
      quantity: 40,
      enable: true,
      cost_price: 2000,
      sale_price: 2500,
      discount: 300,
      category: "Tecnológicos"
    },
    {
      name: "Pantallas",
      quantity: 40,
      enable: true,
      cost_price: 1000,
      sale_price: 1300,
      discount: 200,
      category: "Tecnológicos"
    },
    {
      name: "Bocinas",
      quantity: 35,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 60,
      category: "Tecnológicos"
    },
    {
      name: "Lisadora",
      quantity: 10,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Electrodomésticos"
    },
    {
      name: "Smartphone",
      quantity: 50,
      enable: true,
      cost_price: 2200,
      sale_price: 2800,
      discount: 300,
      category: "Tecnológicos"
    },
    {
      name: "Robot de limpieza",
      quantity: 20,
      enable: true,
      cost_price: 600,
      sale_price: 800,
      discount: 80,
      category: "Electrodomésticos"
    },
    {
      name: "Panel Solar",
      quantity: 20,
      enable: true,
      cost_price: 900,
      sale_price: 1200,
      discount: 20,
      category: "Electrodomésticos"
    },
    {
      name: "Calefacción",
      quantity: 15,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 40,
      category: "Electrodomésticos"
    },
    {
      name: "Ventilador",
      quantity: 20,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Electrodomésticos"
    },
    {
      name: "Aire Acondicionado",
      quantity: 25,
      enable: true,
      cost_price: 600,
      sale_price: 900,
      discount: 60,
      category: "Electrodomésticos"
    },
    {
      name: "Auriculares",
      quantity: 40,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Tecnológicos"
    },
    {
      name: "Mouse",
      quantity: 20,
      enable: true,
      cost_price: 50,
      sale_price: 80,
      discount: 5,
      category: "Tecnológicos"
    },
    {
      name: "Micrófono",
      quantity: 15,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 40,
      category: "Tecnológicos"
    },
    {
      name: "Cable HDMI",
      quantity: 20,
      enable: true,
      cost_price: 40,
      sale_price: 60,
      discount: 5,
      category: "Tecnológicos"
    }
  ],
  [
    {
      name: "Tour Laguna Blanca",
      quantity: 4,
      enable: true,
      cost_price: 600,
      sale_price: 900,
      discount: 50,
      category: "Tour"
    },
    {
      name: "Huaca del Rey",
      quantity: 10,
      enable: true,
      cost_price: 60,
      sale_price: 90,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Tour Montaña Blanca",
      quantity: 1,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Tour Gran Cascada",
      quantity: 3,
      enable: true,
      cost_price: 300,
      sale_price: 450,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Huacachina",
      quantity: 8,
      enable: true,
      cost_price: 40,
      sale_price: 70,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Palo del rey",
      quantity: 10,
      enable: true,
      cost_price: 100,
      sale_price: 130,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Jarron del siglo XV",
      quantity: 5,
      enable: true,
      cost_price: 30,
      sale_price: 50,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Tour Gran Lago",
      quantity: 5,
      enable: true,
      cost_price: 900,
      sale_price: 1200,
      discount: 25,
      category: "Tour"
    },
    {
      name: "Tour Casa de Chocolate",
      quantity: 6,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Manta Ritual",
      quantity: 3,
      enable: true,
      cost_price: 100,
      sale_price: 120,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Tour la gran huella",
      quantity: 2,
      enable: true,
      cost_price: 400,
      sale_price: 700,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Aretes sagrados",
      quantity: 1,
      enable: true,
      cost_price: 150,
      sale_price: 250,
      discount: 10,
      category: "Souvenir"
    },
    {
      name: "Sello de nariz",
      quantity: 5,
      enable: true,
      cost_price: 50,
      sale_price: 70,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Tour playa del descanso",
      quantity: 10,
      enable: true,
      cost_price: 200,
      sale_price: 350,
      discount: 10,
      category: "Tour"
    },
    {
      name: "Tour Gran Cañón",
      quantity: 8,
      enable: true,
      cost_price: 700,
      sale_price: 1000,
      discount: 25,
      category: "Tour"
    },
    {
      name: "Rodillera del siglo XVI",
      quantity: 6,
      enable: true,
      cost_price: 40,
      sale_price: 60,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Pulsera de princesa",
      quantity: 1,
      enable: true,
      cost_price: 200,
      sale_price: 250,
      discount: 10,
      category: "Souvenir"
    },
    {
      name: "Aretes mágicos",
      quantity: 4,
      enable: true,
      cost_price: 100,
      sale_price: 130,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Tour noche estrellada",
      quantity: 3,
      enable: true,
      cost_price: 600,
      sale_price: 900,
      discount: 30,
      category: "Tour"
    },
    {
      name: "Tour sin recuerdos",
      quantity: 4,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Sandalias de chasqui",
      quantity: 8,
      enable: true,
      cost_price: 60,
      sale_price: 90,
      discount: 5,
      category: "Souvenir"
    },
    {
      name: "Prendedor real",
      quantity: 2,
      enable: true,
      cost_price: 120,
      sale_price: 160,
      discount: 10,
      category: "Souvenir"
    },
    {
      name: "Gran Corona",
      quantity: 1,
      enable: true,
      cost_price: 900,
      sale_price: 1200,
      discount: 50,
      category: "Souvenir"
    },
    {
      name: "Tour marino",
      quantity: 6,
      enable: true,
      cost_price: 400,
      sale_price: 700,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Tour naturaleza salvaje",
      quantity: 2,
      enable: true,
      cost_price: 300,
      sale_price: 550,
      discount: 20,
      category: "Tour"
    },
    {
      name: "Garra de tigre",
      quantity: 2,
      enable: true,
      cost_price: 150,
      sale_price: 200,
      discount: 10,
      category: "Souvenir"
    },
    {
      name: "Cuchillo de marfil",
      quantity: 4,
      enable: true,
      cost_price: 150,
      sale_price: 200,
      discount: 10,
      category: "Souvenir"
    },
    {
      name: "Tour miedos",
      quantity: 2,
      enable: true,
      cost_price: 500,
      sale_price: 800,
      discount: 40,
      category: "Tour"
    },
    {
      name: "Mano de origen desconocida",
      quantity: 1,
      enable: true,
      cost_price: 100,
      sale_price: 180,
      discount: 10,
      category: "Souvenir"
    },
    {
      name: "Tour descanso",
      quantity: 2,
      enable: true,
      cost_price: 400,
      sale_price: 600,
      discount: 20,
      category: "Tour"
    }
  ],
  [
    {
      name: "Tigre de montaña",
      quantity: 2,
      enable: true,
      cost_price: 3000,
      sale_price: 3800,
      discount: 400,
      category: "Mascota"
    },
    {
      name: "Arnés",
      quantity: 20,
      enable: true,
      cost_price: 20,
      sale_price: 40,
      discount: 5,
      category: "Utensilio"
    },
    {
      name: "Dobberman",
      quantity: 5,
      enable: true,
      cost_price: 2000,
      sale_price: 2500,
      discount: 150,
      category: "Mascota"
    },
    {
      name: "Comida para perro",
      quantity: 50,
      enable: true,
      cost_price: 90,
      sale_price: 120,
      discount: 25,
      category: "Utensilio"
    },
    {
      name: "Juguete para morder",
      quantity: 35,
      enable: true,
      cost_price: 60,
      sale_price: 100,
      discount: 10,
      category: "Utensilio"
    },
    {
      name: "BUlldog Inglés",
      quantity: 5,
      enable: true,
      cost_price: 2400,
      sale_price: 3000,
      discount: 200,
      category: "Mascota"
    },
    {
      name: "Leopardo",
      quantity: 2,
      enable: true,
      cost_price: 6000,
      sale_price: 8000,
      discount: 500,
      category: "Mascota"
    },
    {
      name: "Ornitorrinco",
      quantity: 4,
      enable: true,
      cost_price: 1500,
      sale_price: 2000,
      discount: 100,
      category: "Mascota"
    },
    {
      name: "Comida para gato",
      quantity: 30,
      enable: true,
      cost_price: 60,
      sale_price: 90,
      discount: 5,
      category: "Utensilio"
    },
    {
      name: "Arena para gato",
      quantity: 30,
      enable: true,
      cost_price: 50,
      sale_price: 80,
      discount: 5,
      category: "Utensilio"
    },
    {
      name: "hierba para gato",
      quantity: 20,
      enable: true,
      cost_price: 80,
      sale_price: 100,
      discount: 10,
      category: "Utensilio"
    },
    {
      name: "Tigre de bengala",
      quantity: 1,
      enable: true,
      cost_price: 8000,
      sale_price: 10000,
      discount: 500,
      category: "Mascota"
    },
    {
      name: "Husky siberiano",
      quantity: 10,
      enable: true,
      cost_price: 3500,
      sale_price: 4000,
      discount: 200,
      category: "Mascota"
    },
    {
      name: "Herradura",
      quantity: 10,
      enable: true,
      cost_price: 200,
      sale_price: 350,
      discount: 20,
      category: "Utensilio"
    },
    {
      name: "Cuerda",
      quantity: 10,
      enable: true,
      cost_price: 40,
      sale_price: 60,
      discount: 5,
      category: "Utensilio"
    },
    {
      name: "Gato Faraónico",
      quantity: 10,
      enable: true,
      cost_price: 2000,
      sale_price: 3000,
      discount: 100,
      category: "Mascota"
    },
    {
      name: "Medias para las patas",
      quantity: 20,
      enable: true,
      cost_price: 60,
      sale_price: 90,
      discount: 10,
      category: "Utensilio"
    },
    {
      name: "Jaulas",
      quantity: 40,
      enable: true,
      cost_price: 80,
      sale_price: 100,
      discount: 10,
      category: "Utensilio"
    },
    {
      name: "Hamster",
      quantity: 6,
      enable: true,
      cost_price: 200,
      sale_price: 350,
      discount: 20,
      category: "Mascota"
    },
    {
      name: "Dispensador de comida",
      quantity: 30,
      enable: true,
      cost_price: 300,
      sale_price: 500,
      discount: 20,
      category: "Utensilio"
    },
    {
      name: "Iguana",
      quantity: 5,
      enable: true,
      cost_price: 2200,
      sale_price: 2800,
      discount: 300,
      category: "Mascota"
    },
    {
      name: "Arenero",
      quantity: 20,
      enable: true,
      cost_price: 100,
      sale_price: 200,
      discount: 20,
      category: "Utensilio"
    },
    {
      name: "Conejo Tibetano",
      quantity: 10,
      enable: true,
      cost_price: 900,
      sale_price: 1200,
      discount: 20,
      category: "Mascota"
    },
    {
      name: "Caballo Pura Sangre",
      quantity: 15,
      enable: true,
      cost_price: 4000,
      sale_price: 6000,
      discount: 100,
      category: "Mascota"
    },
    {
      name: "Biberón",
      quantity: 20,
      enable: true,
      cost_price: 80,
      sale_price: 100,
      discount: 5,
      category: "Utensilio"
    },
    {
      name: "León",
      quantity: 2,
      enable: true,
      cost_price: 6000,
      sale_price: 9000,
      discount: 500,
      category: "Mascota"
    },
    {
      name: "Pinguino",
      quantity: 1,
      enable: true,
      cost_price: 6000,
      sale_price: 8000,
      discount: 500,
      category: "Mascota"
    },
    {
      name: "Correa",
      quantity: 20,
      enable: true,
      cost_price: 50,
      sale_price: 80,
      discount: 5,
      category: "Utensilio"
    },
    {
      name: "Lemúr",
      quantity: 3,
      enable: true,
      cost_price: 4000,
      sale_price: 6000,
      discount: 200,
      category: "Mascota"
    },
    {
      name: "Cuervo",
      quantity: 2,
      enable: true,
      cost_price: 4000,
      sale_price: 6000,
      discount: 300,
      category: "Mascota"
    }
  ]
]

module.exports = async (Boss, Salesman, Client, Feedback, Product) => {

  for (let i = 0; i < bosses.length; i++) {
    const newBoss = await Boss.create(bosses[i]);
    const salesmanArr = salesmans[i];
    const productArr = products[i];
    for (let j = 0; j < salesmanArr.length; j++) {
      const newSalesman = await Salesman.create({ ...salesmanArr[j], bossId: newBoss.id });
      const clientArr = clients[j];
      for (let y = 0; y < clientArr.length; y++) {
        const newClient = await Client.create({ ...clientArr[y], salesmanId: newSalesman.id })
        // for (let z = 0; z < 15; z++) {
        //   const newActivity = await Activity.create({ ...activity[z], to: clientArr[y].name, from: salesmanArr[j].name, salesmanId: newSalesman.id, clientId: newClient.id })
        // }
      }
      for (let y = 0; y < clientArr.length; y++) {
        const score = Math.floor(Math.random() * 5) + 1;
        const newFeedback = await Feedback.create({ score, salesmanId: newSalesman.id })
      }
    }
    for(let w = 0; w < productArr.length; w++) {
      const newProduct = await Product.create({...productArr[w], bossId: newBoss.id});
    }
  }

  // const newBoss = await Boss.create(boss);
  // const newSalesman = await Salesman.create({
  //   ...salesman,
  //   bossId: newBoss.id,
  // });

  // const newClient = await Client.create({
  //   ...client,
  //   salesmanId: newSalesman.id,
  // });
};
