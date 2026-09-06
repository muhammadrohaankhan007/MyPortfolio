import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rohaan // Software Engineer & Applied Data Analyst",
  description: "Specializing in web system architecture and practical data science, utilizing Next.js, C++, and Python to design, build, and maintain high-throughput applications.",
  keywords: ["Software Engineer", "Applied Data Analyst", "Next.js", "C++", "Python", "Full-Stack", "Machine Learning", "Digital Logic"],
  authors: [{ name: "Rohaan" }],
  openGraph: {
    title: "Rohaan // Software Engineer & Applied Data Analyst",
    description: "Specializing in web system architecture and practical data science, utilizing Next.js, C++, and Python to design, build, and maintain high-throughput applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
