import {z} from 'zod';

export const SignupSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string().min(6).max(100),
    name : z.string().min(2).max(100),
})

export const SigninSchema = z.object({
    username :z.string().min(3).max(20),
    password : z.string().min(6).max(100),
})

export const zapCreateSchema = z.object({ 
    
})