import { api } from '@/lib/api'
import { SignInPayloadSchemaType } from '@/schemas/auth'
import { mutationOptions, useQueryClient } from '@tanstack/react-query'
import { useMeQueryOptions } from './useMe'

export async function signIn(payload: SignInPayloadSchemaType) {
  const response = await api.post('/auth/sign-in', payload)
  return response.data
}

export function useSignInMutationOptions() {
  const queryClient = useQueryClient()

  return mutationOptions({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: useMeQueryOptions().queryKey })
    },
  })
}
