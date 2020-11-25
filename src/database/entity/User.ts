import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from 'typeorm'
import bcrypt from 'bcryptjs'


@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    user_email: string;

    @Column()
    user_password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.user_password = bcrypt.hashSync(this.user_password, 8)
    }

}

export default User