"use client"

import { mockLocations } from '@/features/areas/data/locations';
import AreasBanner from "@/features/areas/components/AreasBanner";
import AreasAbout from "@/features/areas/components/AreasAbout";
import AreasList from "@/features/areas/components/AreasList";
import AreasMapSection from "@/features/areas/components/AreasMapSection";
import AreasFooterInfo from "@/features/areas/components/AreasFooterInfo";
import PageContainer from "@/components/layout/PageContainer";

export default function AreasPage() {
  const categories = Array.from(new Set(mockLocations.map(loc => loc.category)));

  return (
    <PageContainer withPadding={false}>
      {/* Banner Section */}
      <AreasBanner />

      {/* Main Content Area Layout */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-16">

        {/* Map Section  */}
        <AreasMapSection locations={mockLocations} categories={categories} />
        
        <AreasAbout />

        {/* Shop Categories Section */}
        <AreasList categories={categories} locations={mockLocations} />
        
        {/* Footer */}
        <AreasFooterInfo />
      </div>
    </PageContainer>
  );
}
