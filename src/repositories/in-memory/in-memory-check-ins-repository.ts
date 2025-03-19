import { randomUUID } from 'node:crypto';
import { CheckInsRepository } from '../../repositories/check-ins-repository';
import { Prisma, CheckIn } from '@prisma/client';

export class InMemoryCheckInsRepository implements CheckInsRepository {
    public items: CheckIn[] = []
    
    async create(data: Prisma.CheckInUncheckedCreateInput) {
        const checkIn = {
            id: randomUUID(),
            user_id: data.user_id,
            gym_id: data.user_id,
            validatedAt: data.validatedAt ? new Date(data.validatedAt) : null,
            createdAt: new Date()
        }

        this.items.push(checkIn)

        return checkIn
    }
}