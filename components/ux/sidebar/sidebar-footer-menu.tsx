'use client'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { IconLogout } from '@tabler/icons-react'

export function SidebarFooterMenu() {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked')
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton onClick={handleLogout}>
          <IconLogout /> <span>Logout</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
