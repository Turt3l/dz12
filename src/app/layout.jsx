import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ClientWrapper from "./clientWrapper";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DZ12",
  description: "DZ12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientWrapper>
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </body>
      </ClientWrapper>
    </html>
  );
}
