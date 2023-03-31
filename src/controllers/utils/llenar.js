const boss = {
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
};

const salesman = {
  name: "Clementine Bauch",
  address: "Kulas Light Apt. 556, Gwenborough",
  email: "Sincere@april.biz",
  phone: 982654357,
  enable: true,
};

const client = {
  name: "Ervin Howell",
  email: "Shanna@melissa.tv",
  phone: "010-692-6593 x09125",
  vip: true,
  enable: true,
};

module.exports = async (Boss, Salesman, Client) => {
  /* const newClient = await Client.create(client, {
        include: [{
            association: Client.Salesman,
            include: [Salesman.Boss]
        }]
    }) */
  const newBoss = await Boss.create(boss);
  const newSalesman = await Salesman.create({
    ...salesman,
    bossId: newBoss.id,
  });

  const newClient = await Client.create({
    ...client,
    salesmanId: newSalesman.id,
  });
};
