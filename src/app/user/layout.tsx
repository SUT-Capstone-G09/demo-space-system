// app/(user)/layout.tsx
"use client"
import { useAuthContext } from "@/lib/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import UserSidebar from "@/components/layout/sidebar/userSidebar"

export default function UserLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")        // ยังไม่ได้ login
      return
    }
    if (user?.role !== "user") {
      router.push("/unauthorized") // login แล้วแต่ role ผิด
    }
  }, [isAuthenticated, user])

  if (!isAuthenticated || user?.role !== "user") return null

  return (
    <>
      <UserSidebar />
      <main className="md:ml-64 pt-20 min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </>
  )
}