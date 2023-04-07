const getAnnual_sales = require("./getAnnual_sales")
const getBest_salesman = require("./getBest_salesman")
const getLowest_stock = require("./getLowest_stock")
const getMonthly_sales = require("./getMonthly_sales")

module.exports = async (id) => {
    const annual_sales = await getAnnual_sales(id)
    const best_salesman = await getBest_salesman(id)
    const lowest_stock = await getLowest_stock(id)
    const monthly_sales = await getMonthly_sales(id)
    return { annual_sales, best_salesman, lowest_stock, monthly_sales }
}