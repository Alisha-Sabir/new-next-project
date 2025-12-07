import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { brittneySignature } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={brittneySignature.className}>
      <Component {...pageProps} />
    </div>
  );
}
