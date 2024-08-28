import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
// GET localhost:3001/api/blogs
router.get('/', checkAuth, blogsCtrl.index)
// POST localhost:3001/api/blogs
router.post('/', checkAuth, blogsCtrl.create)


export { router }