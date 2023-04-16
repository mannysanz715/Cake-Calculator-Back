import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  name: String,
  caker: { type: Schema.Types.ObjectId, ref: 'Profile' },
  descirption: String,
  category: String,
  servings: Number,
  customPrice: Number,
  recipeDirections: String,
  ingredients : {type: Schema.Types.ObjectId, ref: 'Ingredient'},
  allergens: [String],
  storageInfo: String,
  photo: String
},{
  timestamps: true,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export { Recipe }
