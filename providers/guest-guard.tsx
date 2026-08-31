'use client'

import { AuthLoading } from '@/components/ux/auth-loading'
import { useMeQueryOptions } from '@/hooks/useMe'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function GuestGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isLoading, isSuccess } = useQuery(useMeQueryOptions())

  useEffect(() => {
    if (isSuccess) {
      router.push('/dashboard')
    }
  }, [isSuccess, router])

  if (isLoading) {
    return <AuthLoading />
  }

  return children
}
