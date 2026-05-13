import { tenantAreaSummary } from "@/features/tenants/data/tenant-areas";
import { AssetBreadcrumb } from "@/components/layout/AssetBreadcrumb";

export default function AdminTenantAreaHeader() {
  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Title */}
      <div className="space-y-6">
      <AssetBreadcrumb
        items={[
          { label: "Admin", href: "/admin" },
          { label: "ผู้ประกอบการ", href: "/admin/tenants/lists" },
          { label: "รายชื่อสถานที่" },
        ]}
      />

        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            เลือกพื้นที่ประกอบการ
          </h1>
          <p className="max-w-xl text-sm md:text-base font-medium leading-relaxed text-slate-500">
            เลือกพื้นที่หลักที่ต้องการตรวจสอบรายชื่อผู้ประกอบการและสถานะสัญญาปัจจุบัน
            เพื่อดำเนินการจัดการข้อมูลเชิงลึก
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex-1 rounded-md bg-white border border-slate-100 shadow-sm p-5 flex flex-col justify-end items-start gap-2">
          <p className="text-[11px] font-bold text-slate-500 mb-3">สถานที่</p>
          <p className="text-3xl font-black text-slate-900 leading-none">
            {tenantAreaSummary.areaCount}
            <span className="text-sm font-bold text-slate-500 ml-1">แห่ง</span>
          </p>
        </div>
        <div className="flex-1 rounded-md bg-white border border-slate-100 shadow-sm p-5 flex flex-col justify-end items-start gap-2">
          <p className="text-[11px] font-bold  text-slate-500 mb-3">ผู้ประกอบการทั้งหมด</p>
          <p className="text-3xl font-black text-slate-900 leading-none">
            {tenantAreaSummary.tenantCount}
            <span className="text-sm font-bold text-slate-500 ml-1">ราย</span>
          </p>
        </div>
      </div>
    </div>
  );
}
