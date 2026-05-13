export interface MockTenant {
  id: string;
  name: string;
  subLocation: string;
  businessType: string;
  ownerName: string;
  contractEndDate: string;
  image?: string;
}

export const generateMockTenants = (areaId: string, subLocations: string[]): MockTenant[] => {
  const tenants: MockTenant[] = [];
  const businessTypes = ["อาหารและเครื่องดื่ม", "ขนมหวาน", "ร้านสะดวกซื้อ", "เครื่องดื่ม", "บริการ"];
  
  // Create some specific ones if it's cafeterias to make the demo look good
  const specificNames: Record<string, string[]> = {
    "โรงอาหารพราวแสดทอง": ["ร้านป้าณี อาหารตามสั่ง", "ก๋วยเตี๋ยวเรืออยุธยา", "น้ำปั่นผลไม้สด ชื่นใจ"],
    "โรงอาหารกาสะลองคำ": ["ข้าวมันไก่ตอน สูตรไหหลำ", "ข้าวราดแกง 10 อย่าง", "ร้านกาแฟสด All Day"],
    "โรงอาหารคอนตะวัน": ["ข้าวไข่เจียวทรงเครื่อง", "ลูกชิ้นทอด ปิ้งย่าง", "ร้านน้ำผลไม้ปั่น"],
    "โรงอาหารครัวท่านท้าว": ["อาหารอิสลาม ฮาลาล", "ส้มตำ ไก่ย่างรสเด็ด", "ขนมหวานน้ำกะทิ"],
    "โรงอาหารเด่นทองกวาว": ["สเต็กคุณลุง", "อาหารญี่ปุ่น ทาโกะยากิ", "เครปญี่ปุ่น"],
    "โรงอาหารเรียนรวม2": ["ข้าวมันไก่ทอด", "ก๋วยเตี๋ยวต้มยำโบราณ", "ชานมไข่มุก"],
  };

  subLocations.forEach((sub, index) => {
    // Determine how many tenants in this sub location
    const numTenants = specificNames[sub] ? specificNames[sub].length : Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < numTenants; i++) {
      const name = specificNames[sub] ? specificNames[sub][i] : `ร้านค้า ${sub} ${i + 1}`;
      
      tenants.push({
        id: `${areaId}-${sub}-${index}-${i}`,
        name,
        subLocation: sub,
        businessType: businessTypes[Math.floor(Math.random() * businessTypes.length)],
        ownerName: `คุณ ${["สมชาย", "สมหญิง", "มาลี", "วิชัย", "นารี", "ปรีชา"][Math.floor(Math.random() * 6)]} ใจดี`,
        contractEndDate: `202${Math.floor(Math.random() * 3) + 5}-12-31`,
      });
    }
  });

  return tenants;
};
