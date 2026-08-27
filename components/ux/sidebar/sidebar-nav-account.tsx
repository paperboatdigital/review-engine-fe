import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { IconUser, IconCurrencyDollar } from '@tabler/icons-react'
import Link from 'next/link'

export function SidebarNavAccount() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Account</SidebarGroupLabel>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton render={<Link href="/dashboard/profile" />}>
            <IconUser />
            <span>Profile</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton render={<Link href="/dashboard/billing" />}>
            <IconCurrencyDollar />
            <span>Billing</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
