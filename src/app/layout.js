import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
        <footer className="w-full py-2 mt-5 text-center footer text-xl">
          <h1>
            2023 <span className="text-primary">Beautify</span> Todos os
            direitos reservados.
          </h1>
        </footer>
      </body>
    </html>
  );
}
