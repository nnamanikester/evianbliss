import "../styles/index.scss";
import "swiper/css";
import "swiper/css/free-mode";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/main-layout";
import MetaTags from "../components/MetaTags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
