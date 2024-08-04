import Head from "next/head";
import { NextPage } from "next";
import LoginScreen from "@/templates/LoginScreen";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Radix Sensores - Login</title>
        <meta name="description" content="Radix Sensores - Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginScreen />
      </main>
    </>
  );
};

export default Login;
