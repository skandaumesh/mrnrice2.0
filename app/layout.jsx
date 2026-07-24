import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://mrnagro.in"),
  title: {
    default: "MRN Agro Industries — Rice Milling & Processing, Raichur",
    template: "%s | MRN Agro Industries"
  },
  description:
    "Established 2016 in Raichur, Karnataka. MRN Agro Industries mills and processes raw rice, boiled rice, rice bran and rice husk in a modern 8 tons per hour facility, sourcing paddy directly from farmers.",
  icons: { icon: "/logo.jpeg" },
  openGraph: {
    title: "MRN Agro Industries — Rice Milling & Processing, Raichur",
    description:
      "Premium rice products, responsibly sourced and expertly processed in Raichur, Karnataka since 2016.",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#0F3320"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
