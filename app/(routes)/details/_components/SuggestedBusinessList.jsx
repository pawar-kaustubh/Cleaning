import GlobalApi from "@/app/services/GlobalApi";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SuggestedBusinessList({ business, showOnlyButton = false }) {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (business?.category?.name) {
      GlobalApi.getBusinessByCategory(business.category.name)
        .then((resp) => {
          setBusinessList(resp.businessLists.filter(item => item.id !== business.id));
        })
        .catch((err) => {
          console.error("Failed to fetch businesses", err);
        });
    }
  }, [business]);

  // ✅ Only show button if showOnlyButton is true (used in mobile)
  if (showOnlyButton) {
    return (
      <Button className="flex gap-2 w-full">
        <NotebookPen />
        Book Appointment
      </Button>
    );
  }

  // ✅ Full sidebar for desktop
  return (
    <div className="md:pl-4">
      <Button className="flex gap-2 w-full mb-4">
        <NotebookPen />
        Book Appointment
      </Button>

      <h2 className="font-bold text-lg mb-3">Similar Businesses</h2>
      <div className="space-y-4">
        {businessList.map((item) => (
          <Link
            href={`/details/${item.id}`}
            key={item.id}
            className="flex gap-2 hover:border rounded-lg p-2 cursor-pointer hover:shadow-md border-primary"
          >
            <Image
              src={item?.images?.[0]?.url}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-lg object-cover h-[100px]"
            />
            <div>
              <h2 className="font-bold text-sm">{item.name}</h2>
              <h2 className="text-primary text-sm">{item.contactPerson}</h2>
              <h2 className="text-gray-400 text-xs">{item.address}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
