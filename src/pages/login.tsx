import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import MainScreen from '../components/main-screen/main-screen';
import Login from '../components/login/login';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | KVK.com</title>
      </Head>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;
