import Link from "next/link";
import { Store, ChevronRight } from "lucide-react";
import { Location } from "@/features/areas/types/location";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface AreaCardProps {
  location: Location;
}

export default function AreaCard({ location }: AreaCardProps) {
  return (
    <Link href={`/location/${location.id}`} className="group h-full">
      <Card
        className={cn(
          "relative flex flex-col h-full overflow-hidden",
          "bg-white border-none",
          "shadow-md transition-all duration-500",
          "hover:shadow-lg hover:-translate-y-0.5",
          "gap-0 py-0" // Resetting shadcn gap-6 and py-6
        )}
      >
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div
            className="
              absolute top-4 right-4 z-10
              px-3 py-1 bg-white/90 backdrop-blur rounded-[7px] shadow-sm
              text-[10px] font-bold text-[#f26522] uppercase tracking-widest 
            "
          >
            {location.category}
          </div>
        </div>

        {/* Content Section */}
        <CardHeader className="p-8 pb-0 space-y-5">
          <CardTitle
            className="
              text-2xl font-bold leading-tight text-gray-900 
              group-hover:text-[#f26522] transition-colors 
            "
          >
            {location.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8 pt-5 flex-grow">
          {/* Stats/Info */}
          <div className="pt-2 space-y-3 border-t border-gray-50">
            <div className="flex items-center text-sm">
              <span className="w-24 font-bold text-gray-400">หน่วยงาน:</span>
              <span className="font-semibold italic text-gray-700">SUT Property</span>
            </div>

            <div className="flex items-center text-sm">
              <span className="w-24 font-bold text-gray-400">สถานะ:</span>
              <span className="flex items-center gap-2 font-bold text-emerald-500">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                เปิดให้บริการ
              </span>
            </div>
          </div>
        </CardContent>

        {/* Action Button Section */}
        <CardFooter className="p-8 pt-0 flex items-center justify-between">
          {location.category === "โรงอาหาร" ? (
            <div
              className="
                flex items-center text-sm font-black uppercase tracking-wider 
                text-[#f26522] 
              "
            >
              ดูผังร้าน{" "}
              <ChevronRight
                size={20}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </div>
          ) : (
            <div
              className="
                flex items-center text-sm font-bold uppercase tracking-wider 
                text-gray-500 group-hover:text-[#f26522] transition-colors
              "
            >
              รายละเอียด{" "}
              <ChevronRight
                size={20}
                className="ml-1 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
              />
            </div>
          )}

          <div
            className="
              p-2 bg-gray-50 rounded-[7px] text-gray-300 
              group-hover:bg-[#f26522]/10 group-hover:text-[#f26522] transition-colors
            "
          >
            <Store size={20} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}