import { Request, Response} from 'express'
import { getRepository } from 'typeorm'
import User from '../database/entity/User'

class UserController {
    async create(req:Request, res: Response) {
        const UserRepo = getRepository(User)
        const { user_email, user_password } = req.body
        const userExists = await UserRepo.findOne({ where: {user_email}})

        if(userExists)
        {
            return res.send('Usuario já existe')
        }

        const user = UserRepo.create({ user_email, user_password})
        await UserRepo.save(user)


        return res.json(user)
    }


}

export default new UserController()