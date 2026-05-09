"use client"; // จำเป็นต้องใช้สำหรับ Next.js App Router

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Map, 
  Users, 
  Megaphone, 
  FileText, 
  MessageSquare, 
  Star,
  ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  const router = useRouter();

  // กำหนดข้อมูลระบบและเส้นทาง (Path) ไปยังหน้าของแต่ละคน
  const systems = [
    { 
      id: 1, 
      title: 'จัดการข้อมูลพื้นที่', 
      desc: 'ข้อมูลพื้นที่เช่าและแผนผัง Map View', 
      icon: <Map />, 
      path: '/systems/area-management', // เปลี่ยนเป็น path จริงของคุณ
      owner: 'เก่ง',
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      title: 'จัดการผู้เช่าพื้นที่', 
      desc: 'ข้อมูลร้านค้าและเอกสารใบแจ้งหนี้', 
      icon: <Users />, 
      path: '/systems/tenant-management', 
      owner: 'มุก',
      color: 'bg-green-500'
    },
    { 
      id: 3, 
      title: 'ประชาสัมพันธ์', 
      desc: 'ข่าวสารและกิจกรรมล่าสุดภายในศูนย์', 
      icon: <Megaphone />, 
      path: '/systems/pr', 
      owner: 'มาย',
      color: 'bg-purple-500'
    },
    { 
      id: 4, 
      title: 'จำหน่ายเอกสารออนไลน์', 
      desc: 'ซื้อและชำระเงินเอกสารผ่านระบบออนไลน์', 
      icon: <FileText />, 
      path: '/systems/documents', 
      owner: 'จาน่า',
      color: 'bg-yellow-500'
    },
    { 
      id: 5, 
      title: 'คำร้องและสื่อสาร', 
      desc: 'ส่งคำร้องและติดตามสถานะกับเจ้าหน้าที่', 
      icon: <MessageSquare />, 
      path: '/newreport', 
      owner: 'มอส',
      color: 'bg-orange-500'
    },
    { 
      id: 6, 
      title: 'ประเมินผู้เช่า', 
      desc: 'บันทึกคะแนนและประเมินระดับผู้เช่า', 
      icon: <Star />, 
      path: '/systems/evaluation', 
      owner: 'มาย',
      color: 'bg-pink-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* Header Section */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg"></div>
            <span className="text-2xl font-black text-orange-600 tracking-tighter">ASSET SUT</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <button className="hover:text-orange-600 transition-colors">หน้าแรก</button>
            <button className="hover:text-orange-600 transition-colors">พื้นที่เช่า</button>
            <button className="hover:text-orange-600 transition-colors">ติดต่อสอบถาม</button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            ระบบบริหารจัดการ <span className="text-orange-600">สินทรัพย์เชิงพาณิชย์</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg">
            ยินดีต้อนรับเข้าสู่ระบบจัดการส่วนกลาง มหาวิทยาลัยเทคโนโลยีสุรนารี 
            เลือกหัวข้อที่คุณต้องการดำเนินการด้านล่างเพื่อเข้าสู่ระบบย่อย
          </p>
        </div>

        {/* System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((item) => (
            <div 
              key={item.id}
              onClick={() => router.push(item.path)} // คำสั่งให้ไปหน้าระบบย่อย
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 hover:border-orange-200"
            >
              {/* ตกแต่งพื้นหลังเล็กน้อยเมื่อ Hover */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-5 rounded-bl-full transition-all group-hover:scale-150 group-hover:opacity-10`} />

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${item.color} text-white`}>
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 } as any)}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-400">
                  DEVELOPED BY {item.owner}
                </span>
                <div className="flex items-center text-orange-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  เข้าสู่ระบบ <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shortcut Section */}
        <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div>
            <h2 className="text-2xl font-bold mb-2">ต้องการความช่วยเหลือด่วน?</h2>
            <p className="text-slate-400">แจ้งซ่อมครุภัณฑ์ หรือสอบถามข้อมูลการใช้งานระบบส่วนกลางได้ตลอด 24 ชม.</p>
          </div>
          <button 
            onClick={() => router.push('/systems/requests')}
            className="mt-6 md:mt-0 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-orange-900/20 flex items-center"
          >
            แจ้งเรื่องทันที <MessageSquare size={20} className="ml-3" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;