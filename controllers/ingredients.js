import { Ingredient } from '../models/ingredient.js'
import { Recipe } from '../models/recipe.js'
import { v2 as cloudinary } from 'cloudinary'

async function index(req, res) {
  try {
    const ingredients = await Ingredient.find({'caker' : req.user.profile})
    res.status(200).json(ingredients)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res){
  try{
    req.body.caker = req.user.profile
    const ingredient = await Ingredient.create(req.body)
    res.status(201).json(ingredient)
  } catch(error){
    console.log(error)
    res.status(500).json(error)
  }
}


export { 
  index,
  create,
}