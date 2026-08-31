import { api } from '@/lib/api'
import { queryOptions } from '@tanstack/react-query'

export async function getMe() {
  const response = await api.get('/auth/me')
  return response.data
}

export function useMeQueryOptions() {
  return queryOptions({
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    queryKey: ['me'],
    queryFn: getMe,
  })
}
