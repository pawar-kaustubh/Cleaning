"use client"
import { useRouter } from "next/navigation";
import { Descope } from "@descope/nextjs-sdk";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <Descope
        flowId="sign-up-or-in"
        theme="light"
        onSuccess={(e) => {
          console.log("Login Success", e.detail.user);
          router.push("/"); // ✅ Navigate to home
        }}
        onError={(e) => console.error("Login Failed", e)}
      />
    </div>
  );
}
