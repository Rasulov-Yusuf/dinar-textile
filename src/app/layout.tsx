import "./globals.css"
import "keen-slider/keen-slider.min.css"
import "aos/dist/aos.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      { children }
    </>
  );
}
