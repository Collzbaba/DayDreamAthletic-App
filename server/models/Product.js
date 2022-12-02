const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String,
      },
    department:
        [{name: {type: String}}],
    category: 
        [{name: {type: String}}],
    color: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    }
})

const Product = model('Product', productSchema);

module.exports = Product;
