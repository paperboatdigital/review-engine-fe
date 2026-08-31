import { api } from '@/lib/api'
import { mutationOptions, useQueryClient } from '@tanstack/react-query'
import { useMeQueryOptions } from './useMe'

export async function signOut() {
  const response = await api.post('/auth/sign-out')
  return response.data
}

export function useSignOutMutationOptions() {
  const queryClient = useQueryClient()

  return mutationOptions({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: useMeQueryOptions().queryKey })
    },
  })
}
