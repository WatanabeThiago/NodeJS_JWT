import { Request, Response} from 'express'
import { getRepository } from 'typeorm'
import User from '../database/entity/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

interface UserInterface{ 
    user_id: string;
    user_name: string;
    user_password: string
}


class UserController {
    async authenticate(req:Request, res: Response) {
        const UserRepo = getRepository(User)
        const { user_email, user_password } = req.body
        const user = await UserRepo.findOne({ where: {user_email}})

      if(!user) {
          return res.sendStatus(401)
      }
      const isValidPassword = await bcrypt.compare(user_password, user.user_password)

      if(!user)
      {
        return res.sendStatus(401)

      }
      const token = jwt.sign({ id: user.user_id}, 'secret', { expiresIn: '1d'})


      return res.json({
          user, token
      })

    }


}

export default new UserController()