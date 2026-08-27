import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import {
  IconHome,
  IconRoute,
  IconChevronRight,
  IconBrandWhatsapp,
  IconBrandGoogleFilled,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react'

export function SidebarNavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton render={<Link href="/dashboard" />}>
            <IconHome />
            <span>Dashboard</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <Collapsible defaultOpen>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconRoute />
              <span>Integrations</span>
            </SidebarMenuButton>

            <CollapsibleTrigger
              render={
                <SidebarMenuAction className="data-panel-open:rotate-90">
                  <IconChevronRight />
                  <span className="sr-only">Toggle</span>
                </SidebarMenuAction>
              }
            />

            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    render={<Link href="/dashboard/integrations/whatsapp" />}
                  >
                    <IconBrandWhatsapp />
                    <span>WhatsApp</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>

                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    render={<Link href="/dashboard/integrations/google" />}
                  >
                    <IconBrandGoogleFilled />
                    <span>Google Business</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>

        <SidebarMenuItem>
          <SidebarMenuButton render={<Link href="/dashboard/configuration" />}>
            <IconSettings />
            <span>Configuration</span>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuButton render={<Link href="/dashboard/customers" />}>
            <IconUsers />
            <span>Customers</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
