'use client'

import { AuthLoading } from '@/components/ux/auth-loading'
import { useMeQueryOptions } from '@/hooks/useMe'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isLoading, isError } = useQuery(useMeQueryOptions())

  useEffect(() => {
    if (isError) {
      router.push('/sign-in')
    }
  }, [isError, router])

  if (isLoading) {
    return <AuthLoading />
  }

  return children
}
