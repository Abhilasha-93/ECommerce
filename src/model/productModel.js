const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  title: {
    type: String, 
    require: true, 
    unique: true,
    trim: true
  },
  description: {
    type: String, 
    require: true,
    trim: true
  },
  price: {
    type: Number, 
    require: true,
    trim: true
  },             
  currencyId: {
    type: String, 
    require: true,
    trim: true
  },           
  currencyFormat: {
    type: String, //₹
    require: true,
    trim: true
  },      
  isFreeShipping: {
    type: Boolean, 
    default: false,
    trim: true
  },
  productImage: {
    type: String, 
    require: true,
    trim: true
  },  
  style: {
    type: String,
    trim: true
  },
  availableSizes: {
    type: [String], 
    //enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
  }, 
  installments: {
    type: Number,
    trim: true
  },
  deletedAt: {
    type: String, 
    default: null
  },              
  isDeleted: {
    type: Boolean, 
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)