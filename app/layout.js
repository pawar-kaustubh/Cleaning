import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./webcomp/Header";
import { AuthProvider } from "@descope/nextjs-sdk";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "Descope Auth Integration",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider projectId="P2yXjmf07kFt4rxrbE2ul0RHPaMR">
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
