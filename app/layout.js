import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: [ "200" , "400", "500", "700" ] });

export const metadata = {
  title: "Leap",
  description: "Crypto at ur finger tip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
