import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        {/* Left: Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Image src="/logo.svg" alt="logo" width={180} height={50} priority />

          {/* Navigation Links */}
          <nav className="md:flex items-center gap-8 hidden">
            <h2 className="cursor-pointer hover:scale-105 hover:text-primary transition-all">
              Home
            </h2>
            <h2 className="cursor-pointer hover:scale-105 hover:text-primary transition-all">
              Services
            </h2>
            <h2 className="cursor-pointer hover:scale-105 hover:text-primary transition-all">
              About us
            </h2>
          </nav>
        </div>

        {/* Right: Button */}
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
