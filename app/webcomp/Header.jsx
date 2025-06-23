"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useDescope, useSession, useUser } from "@descope/nextjs-sdk/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { isAuthenticated, isSessionLoading, sessionToken } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  useEffect(() => {
    if (sessionToken) {
      console.log("Session Token:", sessionToken);
    }
  }, [sessionToken]);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        {/* Left: Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* <Image src="/logo.svg" alt="logo" width={180} height={50} priority /> */}
          <h1 className="font-bold text-primary text-4xl">Clean On</h1>
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

        {/* Right: Auth Button or User Info */}
        <div className="flex items-center gap-4">
          {isSessionLoading || isUserLoading ? (
            <span>Loading...</span>
          ) : !isAuthenticated ? (
            <Button onClick={() => (window.location.href = "/login")}>
              Get Started
            </Button>
          ) : (
            <>
              {/* Show user profile image if available */}
              {user?.picture ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Image
                      src={user.picture}
                      alt="User Profile"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-gray-300"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>My Booking</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <span className="text-sm">{user?.email}</span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
