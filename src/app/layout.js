import { Manrope, Playfair_Display } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});
const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Nabhan - Personal Portfolio NextJS Template',
    template: '%s | Nabhan - Personal Portfolio NextJS Template',
  },
  description: 'Nabhan - Personal Portfolio NextJS Template',
  openGraph: {
    title: 'Nabhan - Personal Portfolio NextJS Template',
    description: 'Nabhan - Personal Portfolio NextJS Template',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${manrope.variable} ${playfair_display.variable}`}>
        {children}
      </body>
    </html>
  );
}
