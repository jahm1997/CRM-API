const getMonthly_sales = require("../dashboard_salesman/getMonthly_sales");

module.exports = async(salesmanDB) => {
    const { id, name, address, email, phone, enable, createdAt, updatedAt, bossId, feedbacks } = salesmanDB.dataValues
    const scores = feedbacks.map(f => f.dataValues.score)
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    const avgFeedback = sum / scores.length;
    const {total_monthly_sales} = await getMonthly_sales(id)
    return {
        "id": id,
        "name": name,
        "address": address,
        "email": email,
        "phone": phone,
        "enable": enable,
        "createdAt": createdAt,
        "updatedAt": updatedAt,
        "bossId": bossId,
        avgFeedback,
        total_monthly_sales
    }
}