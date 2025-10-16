import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futuraFont = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

const oxaniumFont = localFont({
  src: [
    {
      path: "../../public/fonts/Oxanium-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-oxanium",
});

const kelvinizedFont = localFont({
  src: [
    {
      path: "../../public/fonts/Kelvinized.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kelvinized",
});

export const metadata: Metadata = {
  title: "Newman Solutions",
  description: "idk what to write bro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futuraFont.variable} ${kelvinizedFont.variable} ${oxaniumFont.variable} antialiased w-[100vw] h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
