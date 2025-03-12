/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, describe, it} from 'vitest'
import { RegisterUseCase } from '../use-cases/register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe("Register Use Case", () => {

    it('should hash the user password upon registration', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            name:'John Doe',
            email:'johndoe@gmail.com',
            password:'123456'
        })

        expect(user.id).toEqual(expect.any(String))

    })

    it('should hash the user password upon registration', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: '123456'    
        })

        const isPasswordCorrectlyHashed = await compare('123456', user.password_hash)

        expect(isPasswordCorrectlyHashed).toBe(true)

    })

    it('should hash the user password upon registration', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const email = 'johndoe@gmail.com'

        await registerUseCase.execute({
            name: 'John Doe',
            email,
            password: '123456'    
        })

        await expect(()=> 
            registerUseCase.execute({
                name:'John Doe',
                email,
                password:'123456'
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
        
    })
})