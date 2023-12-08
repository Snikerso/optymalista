import { Header } from "@/components/organisms/Header";
import { ConfigProvider, ThemeConfig } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledAntDRegistry from "./antRegistry";
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
        <StyledComponentsRegistry>
          <StyledAntDRegistry>
            <ConfigProvider theme={theme}>
              <Header />
              <main>{children}</main>
            </ConfigProvider>
          </StyledAntDRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
