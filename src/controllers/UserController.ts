import { Request, Response} from 'express'
import { getConnection, getRepository } from 'typeorm'
import User from '../database/entity/User'

class UserController {
    async index (req: Request, res:Response ){
        return res.send({ user_id: req.userId})

    }
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
    async delete(req: Request, res: Response) {
        const user_id = req.userId
        
        console.log(user_id)
        const user = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where({ user_id})
        .execute()

        console.log('Deletado')
        res.send(`Usuario deletado com sucesso.`)
    }


}

export default new UserController()