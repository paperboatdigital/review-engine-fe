import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { SidebarFooterMenu } from '@/components/ux/sidebar/sidebar-footer-menu'
import { SidebarHeaderMenu } from '@/components/ux/sidebar/sidebar-header-menu'
import { SidebarNavAccount } from '@/components/ux/sidebar/sidebar-nav-account'
import { SidebarNavMain } from '@/components/ux/sidebar/sidebar-nav-main'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarHeaderMenu />
        </SidebarHeader>

        <SidebarContent>
          <SidebarNavMain />
          <SidebarNavAccount />
        </SidebarContent>

        <SidebarFooter>
          <SidebarFooterMenu />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="shrink-0 h-16 flex items-center gap-2 shadow-sm">
          <SidebarTrigger className="ml-2" />
        </header>

        <div className="flex-1 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
