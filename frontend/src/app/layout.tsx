import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ButtonChat from "@/components/chat/ButtonChat";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio coders",
  description: "Portfolio de projetos de desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montSerrat.variable} antialiased`}
      > 
        <ButtonChat />
        {children}

      </body>
    </html>
  );
}
