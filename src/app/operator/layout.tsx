// app/(operator)/layout.tsx
"use client"
import { useAuthContext } from "@/lib/context/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import OperatorSidebar from "@/components/layout/sidebar/operatorSidebar"

export default function OperatorLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")        // ยังไม่ได้ login
      return
    }
    if (user?.role !== "operator") {
      router.push("/unauthorized") // login แล้วแต่ role ผิด
    }
  }, [isAuthenticated, user])

  if (!isAuthenticated || user?.role !== "operator") return null

  return (
    <>
      <OperatorSidebar />
      <main className="ml-64 pt-20 min-h-screen">
        {children}
      </main>
    </>
  )
}