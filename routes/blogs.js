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
// GET localhost:3001/api/blogs/:blogId
router.get('/:blogId', checkAuth, blogsCtrl.show)
// PUT localhost:3001/api/blogs/:blogId
router.put('/:blogId', checkAuth, blogsCtrl.update)
// DELETE localhost:3001/api/blogs/:blogId
router.delete('/:blogId', checkAuth, blogsCtrl.delete)
// POST localhost:3001/api/blogs/:blogId/comments
router.post('/:blogId/comments', checkAuth, blogsCtrl.createComment)


export { router }