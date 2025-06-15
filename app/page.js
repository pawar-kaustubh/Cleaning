"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./webcomp/Hero";
import CategoryList from "./webcomp/CategoryList";
import GlobalApi from "./services/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
