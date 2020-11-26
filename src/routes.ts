import { Router } from 'express'
import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'

import authMiddleware from './middlerwares/authMiddleware'

import User from './database/entity/User'
const router = Router()


router.post('/users', UserController.create)
router.get('/users', authMiddleware, UserController.index)
router.post('/login', AuthController.authenticate)


export default router