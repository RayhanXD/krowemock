import { LucideIcon, LayoutDashboard, FileText, Users, CheckSquare, Settings, LogOut } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "VDR", href: "/vdr", icon: FileText },
  { title: "My Taxes", href: "/taxes", icon: FileText },
  { title: "My Team", href: "/team", icon: Users },
  { title: "To-Do List", href: "/todo", icon: CheckSquare },
]

const bottomNavItems: NavItem[] = [
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Log Out", href: "/logout", icon: LogOut },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-zinc-900 text-white p-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-orange-500 text-2xl font-bold">KROWE</span>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                item.href === "/" ? "bg-zinc-800" : "hover:bg-zinc-800/50"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
          <div className="my-6 border-t border-zinc-800" />
          {bottomNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800/50"
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

