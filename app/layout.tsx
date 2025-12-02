// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import NavBar from "../components/Shared/NavBar";
// import { Cairo } from "next/font/google";
// import Footer from "../components/Shared/Footer";
// const cairo = Cairo({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "500", "600", "700"], 
//   variable: "--font-cairo",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Azzka-اذكي   الشركات السياحية",
//   description : "اذكي هو نظام احترافي متكامل لإدارة شركات السياحة، مصمم لتوفير تجربة سلسة وفعالة في تنظيم جميع العمليات التشغيلية. يشمل النظام وحدات الحسابات، الموارد البشرية، العمليات السياحية، إدارة العملاء، الأرشيف الإلكتروني، والمخازن، ليمنحك السيطرة الكاملة على أعمالك وتسهيل كل العمليات اليومية.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${cairo.className} antialiased`}>
//         <NavBar/>

//         <main className="">
//           {children}
//         </main>
//         <Footer/>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";

import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Azzka - أذكى نظام لإدارة شركات السياحة",
    template: "%s | Azzka",
  },
  icons: {
    icon: "/coloredlogo.svg",
    shortcut: "/coloredlogo.svg",
    apple: "/coloredlogo.svg",
  },

  description:
    "أذكى هو نظام احترافي لإدارة شركات السياحة يشمل الحسابات، الموارد البشرية، CRM، إدارة العمليات السياحية، الأرشيف الإلكتروني والمخازن — كل ذلك في نظام واحد شامل.",
  
  keywords: [
    "نظام شركات السياحة",
    "برنامج إدارة السياحة",
    "سياحة",
    "ERP",
    "CRM",
    "HRM",
    "نظام حسابات",
    "Azzka",
  ],

  metadataBase: new URL("https://azzka.net"),

  alternates: {
    canonical: "https://azzka.net",
  },

  openGraph: {
    title: "Azzka - أذكى نظام لإدارة شركات السياحة",
    description:
      "نظام كامل لإدارة الحسابات، الموارد البشرية، CRM، العمليات السياحية، الأرشيف والمخازن.",
    url: "https://azzka.net",
    type: "website",
    locale: "ar_EG",
    siteName: "Azzka System",
    images: [
      {
        url: "/whiteLogo.png",
        width: 1200,
        height: 630,
        alt: "Azzka Tourism ERP Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Azzka - Tourism ERP System",
    description:
      "نظام شامل لإدارة شركات السياحة والحجوزات وإدارة الحسابات والموظفين.",
    images: ["/whiteLogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} antialiased`}
        suppressHydrationWarning
      >
         
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Azzka Tourism ERP",
              url: "https://azzka.net",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "نظام احترافي لإدارة الحسابات، الموارد البشرية، المخازن، CRM، والعمليات السياحية.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EGP",
              },
            }),
          }}
        />

        <NavBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
