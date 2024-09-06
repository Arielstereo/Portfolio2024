import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import ParticlesComponent from "../../components/Particles";
import { Inter } from "next/font/google";
import Bar from "@/components/Bar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "sonner";
import Switcher from "@/components/Switcher";

const font = Inter({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Ariel Martinez | Portfolio 2024",
  description: "Portfolio personal | Desarrollador web",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={font.className}>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider messages={messages}>
            <ParticlesComponent id="particles" />
            <Bar />
            <Switcher />
            {children}
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
