"use client";
import GlobalApi from "@/app/services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // ✅ missing import

export default function CategorySideBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const pathname = usePathname(); // ✅ usePathname gives the current URL path
  pathname.split("/")[2];

  useEffect(() => {
    getCategoryList();
    pathname && setSelectedCategory(pathname.split("/")[2]);
  }, [pathname]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary ">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link
            href={`/search/${category.name}`}
            key={index}
            className={`flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer items-center transition-all
    ${
      selectedCategory === category.name
        ? "bg-purple-100 text-primary border-primary shadow-md"
        : "hover:bg-purple-50 hover:text-primary hover:border-primary"
    }`}
          >
            <Image src={category.icon.url} alt="icon" width={34} height={30} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
