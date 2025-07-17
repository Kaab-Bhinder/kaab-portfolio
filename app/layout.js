import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Kaab | Web Developer & Computer Scientist",
  description: `Hi, I'm Kaab! A passionate Web Developer crafting modern, responsive, and high-performance websites and applications.
    Specializing in Next.js, React, and full-stack development, I turn ideas into reality with clean code and sleek UI/UX designs.
    Explore my portfolio and let's build something amazing together!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-dartTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
