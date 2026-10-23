import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

const sans = IBM_Plex_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cond = IBM_Plex_Sans_Condensed({ variable: "--font-cond", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: { default: "SK Logistic | Your one stop solution", template: "%s | SK Logistic" },
  description:
    "SK Logistic delivers reliable, skilled and compliant workforce solutions across Saudi Arabia: logistics, industrial, construction, retail, hospitality and corporate manpower.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${cond.variable}`}>
      <body>
        <div className="site">
          <div className="util">
            <div className="wrap">
              <div className="grp">
                <span><b>T</b>&nbsp; {SITE.phone}</span>
                <span><b>E</b>&nbsp; {SITE.email}</span>
              </div>
              <div className="grp">
                <span>{SITE.address}</span>
                <span style={{ color: "#24c3cf", fontWeight: 600 }}>Towards Vision 2030</span>
              </div>
            </div>
          </div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
