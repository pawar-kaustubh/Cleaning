"use client";
import { useSession } from "@descope/nextjs-sdk/client";
import { SignInFlow } from "@descope/react-sdk";
import React from "react";

export default function BusinessDetail() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    // ✅ Render the SignInFlow component properly
    return <SignInFlow flowId="sign-up-or-in" />;
  }

  return (
    <div>
      <h1>BusinessDetail</h1>
    </div>
  );
}
