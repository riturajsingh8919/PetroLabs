import { Rubik, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-font",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default:
      "Petrolabs India – Oil Analysis, Lubrication & Reliability Solutions",
    template: "%s | Petrolabs India – Oil Analysis & Reliability",
  },

  description:
    "Petrolabs India provides world-class oil analysis, lubrication excellence, condition monitoring, laboratory testing services, onsite solutions, and globally aligned training programs across India and the Middle East.",

  openGraph: {
    title: "Petrolabs India – Oil Analysis, Testing & Reliability Solutions",
    description:
      "Explore Petrolabs India’s advanced oil analysis services, NABL-accredited laboratory testing, lubrication training, condition monitoring systems, and industrial reliability solutions.",
    image: "/openGraphImage.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
