import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
  icons: {
    icon: "/mainlogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: "black", color: "white" },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
