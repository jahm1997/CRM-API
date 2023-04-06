const getHighest_stock = require("./getHighest_stock")
const getMonthly_sales = require("./getMonthly_sales")
const getOffer_products = require("./getOffer_products")
const getSalesman_task = require("./getSalesman_task")

module.exports = async (id) => {
    const salesman_task = await getSalesman_task(id)
    const offer_products = await getOffer_products(id)
    const {monthly_sales} = await getMonthly_sales(id)
    const highest_stock = await getHighest_stock(id)

    return {
        salesman_task,
        offer_products,
        monthly_sales,
        highest_stock
    }
}