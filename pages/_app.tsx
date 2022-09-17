import "../styles/index.scss";
import "swiper/css";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/main-layout";
import MetaTags from "../components/MetaTags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTags />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
