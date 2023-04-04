import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import Login from '../components/login/login';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | Book2Book</title>
      </Head>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;
