import { Inter } from "next/font/google";
import { Noto_Sans_Khmer } from "next/font/google";
import { Konkhmer_Sleokchher } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";import LoadingComponent from "@/components/loading/LoadingComponent";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_Khmer({ subsets: ["khmer"] });
const konkhmer = Konkhmer_Sleokchher({ subsets: ["khmer"], weight:"400" });

export const metadata = {
  title: "Lunar - Chinese new year",
  description: "Happy Chinese new year",
  image: "/images/lunar.png",
  openGraph: {
    title: "Lurnar chinese new year",
    description: "Happy Chinese new year",
    url: "https://istad.co/",
    images:
      "https://bellevuecollection.com/app/uploads/2023/12/LNY24__Mobile-Hero-768x590-copy.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={konkhmer.className}>
        <Suspense fallback={<LoadingComponent/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
