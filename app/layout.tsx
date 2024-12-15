import '@/app/globals.css'
import { Inter } from 'next/font/google'
import DashboardLayout from '@/components/dashboard-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Krowe Tax Dashboard',
  description: 'Manage your taxes efficiently with Krowe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  )
}

