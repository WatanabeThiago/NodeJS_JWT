import { Router } from 'express'
import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'
import User from './database/entity/User'
const router = Router()


router.post('/users', UserController.create)
router.post('/login', AuthController.authenticate)


export default router