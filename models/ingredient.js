import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
  ingredientName: String,
  purchaseSize: Number,
  measurement: String,
  costPrice: Number,
  supplier: String,
},{
  timestamps: true,
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export { Ingredient }
