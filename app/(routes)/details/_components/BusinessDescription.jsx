import React from "react";
import Image from "next/image";

export default function BusinessDescription({ business }) {
  return (
    business?.name && (
      <div>
        <h2 className="font-bold text-[25px]">Description</h2>
        <p className="mt-4 text-lg text-gray-600">{business.about}</p>

        <h2 className="font-bold text-[25px] mt-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {business?.images?.slice(1).map((item, index) => (
            <Image
              src={item?.url}
              key={index}
              alt="image"
              width={700}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  );
}
