// app/(admin)/layout.tsx
"use client"
import { useAuthContext } from "@/lib/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import AdminSidebar from "@/components/layout/sidebar/adminSidebar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")        // ยังไม่ได้ login
      return
    }
    if (user?.role !== "admin") {
      router.push("/unauthorized") // login แล้วแต่ role ผิด
    }
  }, [isAuthenticated, user])

  if (!isAuthenticated || user?.role !== "admin") return null

  return (
    <>
      <AdminSidebar />
      <main className="ml-64 pt-25 min-h-screen">
        {children}
      </main>
    </>
  )
}