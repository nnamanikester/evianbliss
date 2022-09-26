import "../styles/index.scss";
import "swiper/css";
import "swiper/css/free-mode";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/main-layout";
import { SessionProvider } from "next-auth/react";
import AuthLayout from "../layouts/auth-layout";
import { AuthT } from "../types";
import { AuthMiddleware } from "../middleware";
import { Toaster } from "react-hot-toast";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { Component: { auth: AuthT["auth"] } }) {
  return (
    <>
      <SessionProvider session={session}>
        {Component.auth ? (
          <AuthMiddleware auth={Component.auth}>
            <AuthLayout auth={Component.auth}>
              <Component {...pageProps} />
            </AuthLayout>
          </AuthMiddleware>
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )}
      </SessionProvider>

      <Toaster />
    </>
  );
}

export default MyApp;
