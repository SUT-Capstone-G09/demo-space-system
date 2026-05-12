// app/(admin)/layout.tsx
"use client"
import { useAuthContext } from "@/lib/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState, ReactNode } from "react"
import AdminSidebar from "@/components/layout/sidebar/adminSidebar"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuthContext()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      if (!isAuthenticated) {
        router.push("/login")       
        return
      }
      if (user?.role !== "admin") {
        router.push("/unauthorized")
      }
    }
  }, [isAuthenticated, user, isMounted, router])

  if (!isMounted) return null

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