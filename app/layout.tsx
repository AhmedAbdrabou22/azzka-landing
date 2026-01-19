import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";

import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Azzka - أذكى نظام لإدارة شركات السياحة",
    template: "%s | Azzka",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      { rel: "icon", url: "/favicon.png" },
      { rel: "apple-touch-icon", url: "/favicon.png" },
    ],
  },
  themeColor: "#fe6813",

  description:
    "أذكى هو نظام احترافي لإدارة شركات السياحة يشمل الحسابات، الموارد البشرية، CRM، إدارة العمليات السياحية، الأرشيف الإلكتروني والمخازن — كل ذلك في نظام واحد شامل.",

  keywords: [
    "نظام شركات السياحة",
    "برنامج شركات السياحة",
    "برنامج إدارة السياحة",
    "نظام إدارة شركات السياحة",
    "أفضل برنامج لشركات السياحة",
    "برنامج سياحي متكامل",
    "سيستم شركات السياحة",
    "سوفت وير شركات السياحة",
    "نظام ERP",
    "نظام ERP سياحي",
    "ERP شركات السياحة",
    "Tourism ERP",
    "Tourism ERP System",
    "Travel ERP System",
    "Travel Agency ERP",
    "ERP System for Tourism",
    "برنامج حسابات شركات السياحة",
    "نظام حسابات سياحي",
    "برنامج محاسبة سياحي",
    "إدارة الحسابات المالية",
    "Financial Management System",
    "Accounting System for Tourism",
    "إدارة الموارد البشرية",
    "برنامج HR",
    "HRM System",
    "نظام شؤون الموظفين",
    "إدارة الموظفين",
    "Payroll System",
    "CRM شركات السياحة",
    "برنامج CRM سياحي",
    "إدارة علاقات العملاء",
    "Customer Relationship Management",
    "Tourism CRM",
    "نظام إدارة الحج والعمرة",
    "برنامج شركات الحج والعمرة",
    "إدارة حملات الحج",
    "إدارة حملات العمرة",
    "Hajj and Umrah Management System",
    "نظام إدارة الحجوزات",
    "برنامج حجز رحلات",
    "إدارة الرحلات السياحية",
    "Tour Booking System",
    "Travel Booking Management",
    "Tour Operations System",
    "إدارة المخازن",
    "برنامج مخازن",
    "Inventory Management System",
    "Stock Management",
    "الأرشيف الإلكتروني",
    "إدارة المستندات",
    "نظام أرشفة إلكترونية",
    "Document Management System",
    "Archive Management System",
    "نظام سحابي",
    "Cloud ERP",
    "SaaS ERP System",
    "Online ERP System",
    "Web Based ERP",
    "برنامج شركات السياحة في مصر",
    "نظام سياحي في السعودية",
    "برنامج سياحي في الوطن العربي",
    "Tourism Software Middle East",
    "Azzka",
    "Azzka ERP",
    "Azzka System",
    "Azzka Tourism ERP",
  ],
  metadataBase: new URL("https://azzka.net"),

  alternates: {
    canonical: "https://azzka.net",
  },

  openGraph: {
    title: "Azzka - أذكى نظام لإدارة شركات السياحة",
    description:
  "Azzka هو نظام ERP احترافي لإدارة شركات السياحة والمؤسسات الخدمية، يوفّر حلولًا متكاملة لإدارة الحسابات المالية، الموارد البشرية، علاقات العملاء (CRM)، الحجوزات، العمليات السياحية، المخازن، والأرشيف الإلكتروني. يساعد النظام على تنظيم البيانات، تحسين كفاءة العمل، تقليل الأخطاء، وتقديم تقارير ذكية لدعم اتخاذ القرار من خلال منصة واحدة آمنة وقابلة للتوسع.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fe6813" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
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
              logo: "https://azzka.net/whiteLogo.png",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "نظام ERP متكامل لإدارة شركات السياحة يشمل الحسابات، الموارد البشرية، CRM، الحجوزات، العمليات السياحية، المخازن، والأرشيف الإلكتروني.",
              featureList: [
                "إدارة الحسابات المالية",
                "إدارة الموارد البشرية والموظفين",
                "إدارة علاقات العملاء (CRM)",
                "إدارة الحجوزات والعمليات السياحية",
                "الأرشيف الإلكتروني وإدارة المستندات",
                "إدارة المخازن والموردين",
                "تقارير وتحليلات ذكية",
                "دعم الذكاء الاصطناعي",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EGP",
                availability: "https://schema.org/OnlineOnly",
              },
              publisher: {
                "@type": "Organization",
                name: "Azzka",
                url: "https://azzka.net",
              },
            }),
          }}
        />

        {/* <NavBar /> */}

        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
