import { z } from 'zod/v4'

export const signUpPayloadSchema = z
  .object({
    email: z.email('Please enter a valid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })

export type SignUpPayloadSchemaType = z.infer<typeof signUpPayloadSchema>

export const signInPayloadSchema = z.object({
  email: z.email('Please enter a valid email address.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
})

export type SignInPayloadSchemaType = z.infer<typeof signInPayloadSchema>
