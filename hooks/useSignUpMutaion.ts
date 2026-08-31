import { api } from '@/lib/api'
import { SignUpPayloadSchemaType } from '@/schemas/auth'
import { mutationOptions } from '@tanstack/react-query'

export async function signUp(payload: SignUpPayloadSchemaType) {
  const response = await api.post('/auth/sign-up', payload)
  return response.data
}

export function useSignUpMutationOptions() {
  return mutationOptions({
    mutationFn: signUp,
  })
}
