import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="flex items-center flex-col gap-5 justify-center pt-14 pb-7 ">
      <h2 className="font-bold text-[46px] text-center">
        Find Home <span className="text-primary">Service/Repair</span>
        <br />
        Near You
      </h2>
      <h2 className="text-xl text-gray-400">
        Explore Best Home Service & Repair near you.
      </h2>
      <div className="mt-4 flex gap-5">
        <Input placeholder="Search" className="rounded-full md:w-[350px]" />
        <Button className="rounded-full h-[40px]">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
