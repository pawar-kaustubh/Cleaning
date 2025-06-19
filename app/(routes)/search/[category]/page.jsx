"use client";

import GlobalApi from "@/app/services/GlobalApi";
import BusinessList from "@/app/webcomp/BusinessList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BusinessByCategory() {
  const { category } = useParams();
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (category) {
      getBusinessList();
    }
  }, [category]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(category)
      .then((resp) => {
        console.log("Fetched Businesses:", resp.businessLists);
        setBusinessList(resp.businessLists);
      })
      .catch((err) => {
        console.error("Failed to fetch businesses", err);
      });
  };

  return (
    <div>
      <p className="text-lg font-medium mb-4">
        Showing businesses in category: <strong>{category}</strong>
      </p>

      <BusinessList
        businessList={businessList}
        title={`Results for "${category}"`}
      />
    </div>
  );
}
