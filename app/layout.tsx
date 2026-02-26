import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LC Vistoria Veicular | Credenciada DETRAN-PE em Trindade",
  description: "Vistoria veicular rápida, segura e sem filas em Trindade-PE. Empresa credenciada ao DETRAN-PE. Realizamos transferência, mudança de categoria, vistoria cautelar e mais.",
  keywords: [
    "vistoria veicular", 
    "Trindade PE", 
    "DETRAN PE", 
    "vistoria cautelar", 
    "transferência de veículo", 
    "laudo veicular", 
    "região do Araripe", 
    "LC Vistoria Veicular",
    "mudança de município"
  ],
  authors: [{ name: "Suetone Carneiro" }],
  creator: "Suetone Carneiro",
  publisher: "LC Vistoria Veicular",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.lcvistoria.com.br", 
    siteName: "LC Vistoria Veicular",
    title: "LC Vistoria Veicular | Credenciada DETRAN-PE",
    description: "Sem filas e sem burocracia. Entregamos seu laudo em poucos minutos com preço justo e tabelado pelo DETRAN.",
    images: [
      '/img/lc-logo-bg-blue.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}