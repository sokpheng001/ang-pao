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
    url: "sokpheng.com",
    images:
      "https://imgs.search.brave.com/wjWOK3qMV4kDYICsTV47_pHWc30-kN2MbvyHocOD0S0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNS8w/MS8yNi9vcmlnaW5h/bC95ZWFyX29mX3Ro/ZV9zbmFrZV8xNzM3/ODk1MjI1NDkxLmpw/Zw",
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
