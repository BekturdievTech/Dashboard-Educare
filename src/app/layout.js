import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar.jsx";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container_main">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}