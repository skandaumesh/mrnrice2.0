import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingInquiry from "@/components/FloatingInquiry";

export const metadata = {
  metadataBase: new URL("https://mrnagro.com"),
  title: {
    default: "MRN Agro Industries — MRN Gold Rice, Raichur",
    template: "%s | MRN Agro Industries"
  },
  description:
    "Established 2003 in Raichur, Karnataka. MRN Agro Industries manufactures the MRN Gold rice range — Double Old Sona Masuri, RNR and Lachkari Kolam raw rice and Old Sona Masuri steam rice — in 5 kg, 10 kg and 26 kg packs, with bulk packaging available.",
  icons: { icon: "/logo.jpeg" },
  openGraph: {
    title: "MRN Agro Industries — MRN Gold Rice, Raichur",
    description:
      "Quality rice, consistency you can count on. Premium rice for everyday meals and dependable business supply from Raichur, Karnataka since 2003.",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#081C17"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingInquiry />
      </body>
    </html>
  );
}
