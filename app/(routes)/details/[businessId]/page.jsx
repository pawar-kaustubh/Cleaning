"use client";
import GlobalApi from "@/app/services/GlobalApi";
import { useSession } from "@descope/nextjs-sdk/client";
import { SignInFlow } from "@descope/react-sdk";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";

export default function BusinessDetail() {
  const { businessId } = useParams();
  const { data, status } = useSession();
  const [businessDetail, setBusinessDetail] = useState(null);

  useEffect(() => {
    if (businessId) {
      GlobalApi.getBusinessById(businessId).then((resp) => {
        setBusinessDetail(resp.businessList);
      });
    }
  }, [businessId]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated")
    return <SignInFlow flowId="sign-up-or-in" />;
  if (!businessDetail) return <p>Fetching business details...</p>;

  return (
    <div className="py-8 md:py-20 px-10 md:px-36">
      <BusinessInfo business={businessDetail} />

      {/* ✅ Book Button for Mobile */}
      <div className="block md:hidden my-6">
        <SuggestedBusinessList business={businessDetail} showOnlyButton />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="col-span-3 md:col-span-2 order-last md:order-first">
          <BusinessDescription business={businessDetail} />
        </div>

        {/* ✅ Right sidebar: full SuggestedBusinessList only for md+ */}
        <div className="col-span-1 hidden md:block">
          <SuggestedBusinessList business={businessDetail} />
        </div>
      </div>
    </div>
  );
}
