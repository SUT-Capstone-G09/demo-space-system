import { notFound } from "next/navigation";
import { tenantAreaOptions } from "@/features/tenants/data/tenant-areas";
import AdminTenantSubAreaView from "@/features/tenants/components/admin/AdminTenantSubAreaView";

export default async function AdminTenantAreaDetailPage({
  params,
}: {
  params: Promise<{ areaId: string }>;
}) {
  const { areaId } = await params;
  const area = tenantAreaOptions.find((a) => a.id === areaId);

  if (!area) {
    notFound();
  }

  return (
    <div className="space-y-8 p-8">
      <AdminTenantSubAreaView areaId={areaId} />
    </div>
  );
}
