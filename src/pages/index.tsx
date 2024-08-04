import HomeScreen from "@/templates/HomeScreen";
import Head from "next/head";
import { ReactElement } from "react";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Radix Sensores</title>
        <meta name="description" content="Radix Sensores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <HomeScreen />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
