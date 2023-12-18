import { Header } from "@/components/organisms/Header";
import { ConfigProvider, ThemeConfig } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
const inter = Inter({ subsets: ["latin"] });

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
};

export const metadata: Metadata = {
  title: "Optymalista",
  description: "Poznaj mnie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          data-cookieconsent="ignore"
          src="https://app.zencal.io/js/zenbed.js?v=1702468090390"
        />
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <Header />
            <main>{children}</main>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
