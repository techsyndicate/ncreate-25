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
        className={`${futuraFont.className} antialiased w-[100vw] h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
