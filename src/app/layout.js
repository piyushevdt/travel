import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/Custom/SmoothScroll";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {children}
            <Footer/>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}