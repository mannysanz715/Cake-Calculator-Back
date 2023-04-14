import { Router } from 'express'
import * as recipesCtrl from '../controllers/recipes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.get('/', checkAuth, recipesCtrl.index)
router.post('/add', checkAuth, recipesCtrl.create)
router.delete('/delete/:id', checkAuth, recipesCtrl.delete)

export { router }
