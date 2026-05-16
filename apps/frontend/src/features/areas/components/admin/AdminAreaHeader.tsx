"use client"

import React from "react";
import {
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AdminAreaCreateDrawer from "./AdminAreaCreateDrawer";
import { AssetBreadcrumb } from "@/components/layout/AssetBreadcrumb";

export default function AdminAreaHeader() {
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between lg:justify-start lg:gap-4">
            <AssetBreadcrumb 
              items={[
                { label: "Admin", href: "/admin" },
                { label: "จัดการพื้นที่" }
              ]} 
            />
          </div>

          {/* Title Section */}
          <div>
            <h1 className="page-title">
              จัดการพื้นที่เช่า
            </h1>
          </div>
        </div>

        {/* Action Group */}
        <div className="flex items-center">
          <Button
            onClick={() => setIsCreateDrawerOpen(true)}
            className={cn(
              "h-11 px-6 rounded-[7px] font-bold text-xs text-white",
              "bg-[#f26522] hover:bg-[#d8561d] transition-all",
              "shadow-lg shadow-[#f26522]/20 gap-2"
            )}
          >
            <Plus size={18} strokeWidth={3} />
            <span>เพิ่มสถานที่ใหม่</span>
          </Button>
        </div>
      </div>

      <AdminAreaCreateDrawer
        open={isCreateDrawerOpen}
        onClose={() => setIsCreateDrawerOpen(false)}
      />
    </div>
  );
}