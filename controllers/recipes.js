import { Recipe } from '../models/recipe.js'
import { v2 as cloudinary } from 'cloudinary'

async function index(req, res) {
  try {
    const recipes = await Recipe.find({'caker' : req.user.profile}).populate('ingredients').populate('caker')
    res.status(200).json(recipes)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res){
  try{
    req.body.caker = req.user.profile
    const recipe = await Recipe.create(req.body)
    res.status(201).json(recipe)
  } catch(error){
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteRecipe(req, res){
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id)
    res.status(201).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


export { 
  index,
  create,
  deleteRecipe as delete,
}