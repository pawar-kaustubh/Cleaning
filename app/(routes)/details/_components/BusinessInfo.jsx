import React from "react";
import Image from "next/image";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import { Button } from "@/components/ui/button"; // ✅ Import this

export default function BusinessInfo({ business }) {
  return business.name && (
    <div className="flex gap-6 items-center flex-wrap">
      <Image
        src={business?.images?.[0]?.url}
        alt={business?.name || "Business Image"}
        width={150}
        height={150}
        className="rounded-full h-[150px] object-cover"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-baseline gap-3">
          <h2 className="text-primary bg-purple-100 rounded-full p-1 px-3 text-lg">
            {business?.category?.name}
          </h2>
          <h2 className="text-[40px] font-bold">{business.name}</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin />
            {business.address}
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail />
            {business?.email}
          </h2>
        </div>

        <div className="flex flex-col gap-3 items-start mt-4">
          <Button variant="outline" className="flex items-center bg-primary text-white gap-2">
            <Share /> Share
          </Button>
          <h2 className="flex gap-2 text-xl text-primary items-center">
            <User /> {business.contactPerson}
          </h2>
          <h2 className="flex gap-2 text-xl text-gray-500 items-end">
            <Clock /> Available 8:00 AM to 10 PM
          </h2>
        </div>
      </div>
    </div>
  );
}
