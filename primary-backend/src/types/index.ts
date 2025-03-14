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

export const ZapCreateSchema = z.object({
    availableTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata: z.any().optional(),
    }))
});