import type { Metadata } from "next";
import "./globals.css";
import CosmicBackground from "@/components/CosmicBackground";

export const metadata: Metadata = {
  title: "Infinite Manifest | Manifest Your Dream Life",
  description: "Powerful manifestation tools including vision board generator, affirmation creator, and courses to help you attract abundance and create your dream life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CosmicBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
