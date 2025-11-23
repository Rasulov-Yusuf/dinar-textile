import "./globals.css"
import "keen-slider/keen-slider.min.css"
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      { children }
    </>
  );
}
