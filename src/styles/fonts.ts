import localFont from "next/font/local";

export const brittneySignature = localFont({
  src: [
    {
      // path: "../../public/fonts/brittney-signature.otf",
      path: "../../public/fonts/brittany-simple.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-brittney-signature",
});
