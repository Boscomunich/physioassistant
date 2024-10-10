'use server'

type CreateUserParams = {
    firstName: string
    lastName: string
    email: string
    password: string
}

export async function createUser (user: CreateUserParams) {
    
}