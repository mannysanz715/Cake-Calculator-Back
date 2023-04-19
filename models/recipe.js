import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ingrediendtsSchema = new Schema({
  type : { type: Schema.Types.ObjectId, ref: 'Ingredient' },
  amount: Number
})

const recipeSchema = new Schema({
  name: String,
  caker: { type: Schema.Types.ObjectId, ref: 'Profile' },
  descirption: String,
  category: String,
  servings: Number,
  customPrice: Number,
  costPrice : Number,
  recipeDirections: String,
  ingredients : [{ingrediendtsSchema}],
  allergens: [String],
  storageInfo: String,
  photo: String
},{
  timestamps: true,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export { Recipe }
