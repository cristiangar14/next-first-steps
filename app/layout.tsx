import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const poppins = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Cristian",
  description: "Next course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
