/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, describe, it} from 'vitest'
import { RegisterUseCase } from '../use-cases/register'
import { compare } from 'bcryptjs'

describe("Register Use Case", () => {
    it('should hash the user password upon registration', async () => {
        const registerUseCase = new RegisterUseCase({
            async findByEmail(email){
            return null
        },
            
            async create(data){
                return {
                    id: 'user-1',
                    name: data.name,
                    email: data.email,
                    password_hash: data.password_hash,
                    createdAt: new Date(),
                }
            },
    })

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: '123456'    
        })

        const isPasswordCorrectlyHashed = await compare('123456', user.password_hash)

        expect(isPasswordCorrectlyHashed).toBe(true)

    })
})