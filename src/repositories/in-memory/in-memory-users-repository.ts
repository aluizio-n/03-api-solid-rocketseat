import { UsersRepository } from '../users-repository';
import { User, Prisma } from '@prisma/client';

export class InMemoryUsersRepository implements UsersRepository {
    private items: User[] = []
    async findByEmail(email: string){
        const user = this.items.find((item)=> item.email === email)
        
        if(!user){
            return null
        }

        return user
    }
    
    async create(data: Prisma.UserCreateInput) {
        const user = {
            id: 'user-1',
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            createdAt: new Date(),
        }

        this.items.push(user)

        return user
    }
}