import { Router } from 'express'
import * as ingredientsCtrl from '../controllers/ingredients.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, ingredientsCtrl.index)
router.post('/new', checkAuth, ingredientsCtrl.create)

export { router }
