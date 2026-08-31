'use client'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Spinner } from '@/components/ui/spinner'
import { useSignOutMutationOptions } from '@/hooks/useSignOutMutation'
import { handleApiError } from '@/lib/utils'
import { IconLogout } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'

export function SidebarFooterMenu() {
  const { mutateAsync, isPending } = useMutation(useSignOutMutationOptions())

  async function handleSignOut() {
    try {
      await mutateAsync()
    } catch (error) {
      handleApiError(error)
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton onClick={handleSignOut} disabled={isPending}>
          {isPending ? <Spinner data-icon="inline-start" /> : <IconLogout />}
          <span>Logout</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
