module.exports = (database) => {
    const { activity, boss, client, feedback, product, sale_product, salesman } = database.models
   
    sale_product.belongsTo(activity);
    sale_product.belongsTo(product);

    activity.belongsTo(client);
    activity.belongsTo(salesman);

    salesman.belongsTo(boss);
    client.belongsTo(salesman);

    boss.hasOne(product, { through: boss });
    salesman.hasOne(feedback, { through: salesman });

}