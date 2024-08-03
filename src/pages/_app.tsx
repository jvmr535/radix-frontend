import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { NextUIProvider } from "@nextui-org/react";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return (
    <NextUIProvider>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          {/* <AuthProvider> */}
          <ErrorBoundary hasError={false}>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
          {/* </AuthProvider> */}
        </QueryClientProvider>
      </CookiesProvider>
    </NextUIProvider>
  );
}
