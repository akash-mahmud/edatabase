const { Product } = require('../models')
module.exports = {
    addProduct: async (payload) => {
        let saveProduct = await Product.create({
            id: payload.idd,
            name: payload.name,
            description: payload.description,
            price: payload.price,
            url: payload.url,
        })
        if (saveProduct) {
            return { success: true, data: saveProduct }
        } else {
            return { success: false }
        }
    },
    getProductList: async () => {
        let products = await Product.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: { isDeleted: 0 }
        })
        if (products) {
            return { success: true, data: products }
        } else {
            return { success: false }
        }
    },
    getProduct: async (prodid) => {
        let product = await Product.findOne({ where: { id: prodid } })
        if (product) {
            return { success: true, data: product }
        } else {
            return { success: false }
        }
    },
    updateProduct: async (payload) => {
        let update = await Product.update({
            name: payload.name,
            description: payload.description,
            price: payload.filename,
            url: payload.url
        }, {
            where: { id: payload.prodid }
        })
        if (update[0] != 0) {
            return { success: true, data: update[0] }
        } else {
            return { success: false }
        }
    },
    deleteProduct: async (prodid) => {
        let delete_product = await Product.update({
            isDeleted: 1
        }, { where: { id: prodid } })
        if (delete_product[0] != 0) {
            return { success: true, data: delete_product[0] }
        } else {
            return { success: false }
        }
    }
}