import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kethy Candy | Doces Artesanais em João Pessoa",
  description: "Brownies, cones recheados, mousses, pudins e bolos de pote preparados diariamente com ingredientes selecionados. Peça por delivery!",
  keywords: "doces, confeitaria, brownie, cone recheado, joão pessoa, delivery, kethy candy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-brand-cream text-brand-chocolate antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
